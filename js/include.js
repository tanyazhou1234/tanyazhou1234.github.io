async function include(id, url) {
  const el = document.getElementById(id);
  if (!el) return;

  const res = await fetch(url, { cache: "no-cache" });
  if (!res.ok) {
    el.innerHTML = `<!-- Failed to load ${url} -->`;
    return;
  }
  el.innerHTML = await res.text();
}

// Include the partials
include("site-nav", "partials/nav.html");
include("left-sidebar", "partials/left-sidebar.html");
include("right-sidebar", "partials/right-sidebar.html");

function highlightCurrentNav() {
  const current = location.pathname.split("/").pop() || "index.html";
  const links = document.querySelectorAll("nav a");

  links.forEach(link => {
    const href = link.getAttribute("href");
    if (href === current) {
      link.classList.add("active");
    }
  });
}

// Delay to ensure nav is loaded
setTimeout(highlightCurrentNav, 50);
