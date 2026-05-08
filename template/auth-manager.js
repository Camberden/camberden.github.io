// Authentication utility for managing JWT tokens

class AuthManager {
  constructor() {
    this.tokenKey = 'jwt_token';
  }

  // Store token in localStorage
  saveToken(token) {
    localStorage.setItem(this.tokenKey, token);
  }

  // Retrieve token from localStorage
  getToken() {
    return localStorage.getItem(this.tokenKey);
  }

  // Clear token (logout)
  clearToken() {
    localStorage.removeItem(this.tokenKey);
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

  // Handle form submission for API endpoints
  setupFormHandlers() {
    document.querySelectorAll('form').forEach(form => {
      // Skip non-API forms
      const action = form.getAttribute('action');
      if (!action || !action.startsWith('/api/')) return;

      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        await this.submitForm(form);
      });
    });
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

      // Handle login success - save token
      if (action === '/api/auth/login' && response.ok && result.token) {
        this.saveToken(result.token);
        alert(`Login successful! Token saved.\nWelcome, ${result.user.username}`);
        form.reset();
        // Update UI to show user is logged in
        this.updateAuthUI();
      } else if (action === '/api/auth/logout' && response.ok) {
        // Handle logout - clear token and update UI
        this.clearToken();
        this.updateAuthUI();
        alert(result.message || 'Logout successful');
        form.reset();
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
    const authStatus = document.getElementById('auth-status');
    
    if (authStatus) {
      if (isAuth) {
        authStatus.textContent = '✓ Logged in';
        authStatus.style.color = 'green';
      } else {
        authStatus.textContent = 'Not logged in';
        authStatus.style.color = 'red';
      }
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
        <div style="border: 1px solid #ccc; padding: 1rem; margin-bottom: 1rem; border-radius: 4px;">
          <h3 style="margin-top: 0;">${this.escapeHtml(note.title)}</h3>
          <p><strong>By:</strong> ${this.escapeHtml(note.username)}</p>
          ${note.location ? `<p><strong>Location:</strong> ${this.escapeHtml(note.location)}</p>` : ''}
          ${note.tags && note.tags.length > 0 ? `<p><strong>Tags:</strong> ${note.tags.map(t => this.escapeHtml(t)).join(', ')}</p>` : ''}
          <p>${this.escapeHtml(note.body)}</p>
          <small>Created: ${new Date(note.created_at).toLocaleDateString()}</small>
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

      if (response.ok) {
        this.clearToken();
        localStorage.clear();
        this.updateAuthUI();
        alert('Logged out successfully');
        // Optionally redirect to login page
        // window.location.href = '/login';
      } else {
        alert('Logout failed');
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
    this.displayNotes();
  }
}

// Create global instance
const authManager = new AuthManager();

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => authManager.init());
} else {
  authManager.init();
}
