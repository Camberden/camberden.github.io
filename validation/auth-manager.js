// Authentication utility for managing JWT tokens
class AuthManager {
	constructor() {
		this.tokenKey = 'jwt_token';
	}

	// Store token in cookie (works better across partitioned contexts)
	saveToken(token) {
		// Set cookie to expire in 7 days, accessible from all paths
		const expiryDate = new Date();
		expiryDate.setTime(expiryDate.getTime() + 7 * 24 * 60 * 60 * 1000);
		document.cookie = `${this.tokenKey}=${token};path=/;expires=${expiryDate.toUTCString()};SameSite=Lax`;
	}

	// Retrieve token from cookie
	getToken() {
		const nameEQ = this.tokenKey + "=";
		const cookies = document.cookie.split(';');
		for (let i = 0; i < cookies.length; i++) {
			let cookie = cookies[i].trim();
			if (cookie.indexOf(nameEQ) === 0) {
				return cookie.substring(nameEQ.length);
			}
		}
		return null;
	}

	// Clear token (logout)
	clearToken() {
		document.cookie = `${this.tokenKey}=;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC;SameSite=Lax`;
	}

	// Check if user is authenticated
	isAuthenticated() {
		return !!this.getToken();
	}

	// Make authenticated API request
	async fetchWithAuth(url, options = {}) {
		const token = this.getToken();

		// Construct full API URL for production
		let fullUrl = url;
		if (!url.startsWith('http')) {
			const apiBase = window.location.hostname === 'localhost'
				? 'http://localhost:3020'
				: `https://${window.location.hostname}`;
			fullUrl = apiBase + url;
		}

		const headers = {
			'Content-Type': 'application/json',
			...options.headers
		};

		if (token) {
			headers['Authorization'] = `Bearer ${token}`;
		}

		return fetch(fullUrl, {
			...options,
			headers
		});
	}

	// Handle form submission for API endpoints (with event delegation for dynamic forms)
	setupFormHandlers() {
		// Use event delegation on document to catch dynamically added forms
		document.addEventListener('submit', async (e) => {
			const form = e.target;
			const action = form.getAttribute('action');
			// Skip non-API forms
			if (!action || !action.startsWith('/api/')) return;

			e.preventDefault();
			await this.submitForm(form);
		}, true); // Use capture phase to catch before other handlers
	}

	// Submit form and handle response
	async submitForm(form) {
		const action = form.getAttribute('action');
		const method = form.getAttribute('method') || 'POST';
		const formData = new FormData(form);
		const data = Object.fromEntries(formData);

		try {
			// Parse JSON fields if needed
			if (data.tags && typeof data.tags === 'string') {
				try {
					data.tags = data.tags.split(',').map(t => t.trim());
				} catch (e) {
					data.tags = [];
				}
			}
			if (data.photos && typeof data.photos === 'string') {
				try {
					data.photos = data.photos.split(',').map(p => p.trim());
				} catch (e) {
					data.photos = [];
				}
			}
			if (data.audio && typeof data.audio === 'string') {
				try {
					data.audio = data.audio.split(',').map(a => a.trim());
				} catch (e) {
					data.audio = [];
				}
			}

			const response = await this.fetchWithAuth(action, {
				method,
				body: JSON.stringify(data)
			});

			// All API responses should be JSON
			let result;
			try {
				result = await response.json();
			} catch (error) {
				console.error('Failed to parse response as JSON:', {
					status: response.status,
					statusText: response.statusText,
					contentType: response.headers.get('content-type')
				});
				alert(`Server error (${response.status}): Server did not return valid JSON. Check server logs.`);
				return;
			}

			// % Handle login success - save token
			if (action === '/api/auth/login' && response.ok && result.token) {
				this.saveToken(result.token);
				alert(result.message || `(2) Login successful! \nWelcome, ${result.user.username}`);
				form.reset();
				// Update UI to show user is logged in
				this.updateAuthUI();
				if (result.redirectUrl) {
					window.location.href = result.redirectUrl;
				}
				// % Handle logout success - clear token
			} else if (action === '/api/auth/logout' && response.ok) {
				// Handle logout - clear token and update UI
				this.clearToken();
				alert(result.message || '(2) Logout successful.');
				this.updateAuthUI();
				form.reset();
				if (result.redirectUrl) {
					window.location.href = result.redirectUrl;
				}
			} else if (action === '/api/blog/' && response.ok) {
				alert(result.message || '(2) Post created!');
				form.reset();

			} else if (action === '/api/notes/' && response.ok) {
				console.log("Notes");
				this.displayNotes();
			} else if (response.ok) {
				alert(result.message || 'Success!');
				form.reset();
				// Refresh notes if a note was just created 
				if (action === '/api/notes/') {
					this.displayNotes();
				}
			} else {
				alert(`Error: ${result.error || 'Unknown error'}`);
			}

			return result;
		} catch (error) {
			console.error('Form submission error:', error);
			alert(`Error: ${error.message}`);
		}
	}

	// Update UI to reflect authentication status
	updateAuthUI() {
		const isAuth = this.isAuthenticated();
		try {
			if (Alpine && Alpine.store && Alpine.store('nauth')) {
				if (isAuth !== Alpine.store('nauth').valid) {
					Alpine.store('nauth').toggle();
				}
			}
		} catch (error) {
			console.warn('Could not update Alpine store:', error);
		}
	}

	// Fetch and display all notes
	async displayNotes() {
		const notesContainer = document.getElementById('all-notes-display');
		if (!notesContainer) return;

		try {
			const response = await fetch('/api/notes/');
			if (!response.ok) {
				notesContainer.innerHTML = '<p>Error loading notes</p>';
				return;
			}

			const notes = await response.json();

			if (!notes || notes.length === 0) {
				notesContainer.innerHTML = '<p>No notes yet</p>';
				return;
			}

			// Create HTML for notes
			notesContainer.innerHTML = notes.map(note => `
        <div class="flex-table-row grid-col-1-3-1">
          <div>${this.escapeHtml(note.title)}</div>
          <div>${this.escapeHtml(note.body)}</div>
          <div>${note.tags && note.tags.length > 0 ? `${note.tags.map(t => this.escapeHtml(t)).join(', ')}</div>` : ''}
        </div>
      `).join('');
		} catch (error) {
			console.error('Error fetching notes:', error);
			notesContainer.innerHTML = '<p>Error loading notes</p>';
		}
	}

	// Escape HTML to prevent XSS
	escapeHtml(text) {
		const div = document.createElement('div');
		div.textContent = text;
		return div.innerHTML;
	}

	// Logout user
	async logout() {
		try {
			const response = await this.fetchWithAuth('/api/auth/logout', {
				method: 'POST'
			});

			const result = await response.json();

			if (response.ok) {
				this.clearToken();
				this.updateAuthUI();
				alert(result.message || '(2) Logout successful.');
				if (result.redirectUrl) {
					window.location.href = result.redirectUrl;
				}
			} else {
				alert(result.error || 'Logout failed');
			}
		} catch (error) {
			console.error('Logout error:', error);
			alert(`Error: ${error.message}`);
		}
	}

	// Initialize on page load
	init() {
		this.setupFormHandlers();
		this.updateAuthUI();
	}
}

// Create global instance
const authManager = new AuthManager();


// Initialize when DOM is ready
// if (document.readyState === 'loading') {
// 	document.addEventListener('DOMContentLoaded', () => authManager.init());
// } else {
// 	authManager.init();
// }
