console.log("Router.js Active! WIP");

const routes = {
	"/": {file: "index.html", init: initHome },
	"/dashboard/": {file: "dashboard/dashboard.html", init: initDashboard },
	// "/workspace/": {file: "workspace/workspace.html", init: initWorkspace },
	// "/anki/": {file: "anki/anki.html", init: initAnki },
	// "/depository/": {file: "depository/depository.html", init: initDepository },
	// "/blog/": {file: "blog/blog.html", init: initBlog },
	// "/language/": {file: "language/language.html", init: initLanguage },
	// "/travel/": {file: "travel/travel.html", init: initTravel },
	// "/lifecraft/": {file: "lifecraft/lifecraft.html", init: initLifecraft },
	// "/musings/": {file: "musings/musings.html", init: initMusings },
	// "/fantasy/": {file: "fantasy/fantasy.html", init: initFantasy },
	// "/segregation/": {file: "segregation/segregation.html", init: initSegregation },
	// "/music/": {file: "music/music.html", init: initMusic },
}

async function navigate(pathname) {
  const route = routes[pathname];
  if (!route) return;
  
  // Cleanup previous page
  route.cleanup?.();
  
  // Remove old stylesheets and scripts (except core ones)
  document.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
    if (!link.href.includes('styles.css')) link.remove();
  });
  document.querySelectorAll('script[src*=".js"]').forEach(script => {
    if (!['cmbr.js', 'router.js', 'htmx.js'].some(core => script.src.includes(core))) {
      script.remove();
    }
  });
  
  // Fetch and inject HTML
  const html = await fetch(route.file).then(r => r.text());
  document.body.innerHTML = html;
  
  // Load new stylesheets
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const links = doc.querySelectorAll('link[rel="stylesheet"]');
  links.forEach(link => {
    const newLink = link.cloneNode(true);
    document.head.appendChild(newLink);
  });
  
  // Load new scripts (excluding those at bottom of pages)
  const scripts = doc.querySelectorAll('script[src]:not([type="module"])');
  for (const script of scripts) {
    if (!['cmbr.js', 'router.js'].some(core => script.src.includes(core))) {
      const newScript = document.createElement('script');
      newScript.src = script.src;
      newScript.async = true;
      document.body.appendChild(newScript);
    }
  }
  
  // Initialize page
  await route.init();
  
  // Update URL
  window.history.pushState({path: pathname}, '', pathname);
}

// HOME PAGE
function initHome() {
  return import('./cmbr.js').then(m => m.init?.());
}

function cleanupHome() {
  // Remove action.js listeners
  window.removeEventListener('click', actionClickHandler);
  // Clear any timers/intervals
  clearInterval(slideshow);
}

// DASHBOARD PAGE
function initDashboard() {
  return import('./dashboard/dashboard.js?v=' + Date.now()).then(m => m.init?.());
}

function cleanupDashboard() {
  // Cleanup dashboard listeners
  window.removeEventListener('click', dashboardClickHandler);
}

document.addEventListener('click', (e) => {
  const link = e.target.closest('a[data-route]');
  if (link) {
    e.preventDefault();
    navigate(link.dataset.route);
  }
});

window.addEventListener('popstate', (e) => {
  navigate(e.state?.path || '/');
});