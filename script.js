(() => {
  const config = window.DEVELOPER_CONFIG || {};
  const apps = window.DEVELOPER_APPS || [];
  const grid = document.getElementById("app-grid");
  const supportLink = document.getElementById("support-email-link");
  const notice = document.getElementById("apps-notice");

  if (supportLink && config.supportEmail && !config.supportEmail.startsWith("REPLACE_")) {
    supportLink.href = `mailto:${config.supportEmail}`;
  }
  if (notice && apps.length && apps.every(app => app.playUrl && app.playUrl.trim())) {
    notice.hidden = true;
  }
  if (grid) {
    grid.innerHTML = apps.map((app) => {
      const hasLink = typeof app.playUrl === "string" && app.playUrl.startsWith("https://play.google.com/");
      const action = hasLink
        ? `<a class="app-link" href="${escapeHtml(app.playUrl)}" target="_blank" rel="noopener noreferrer">View on Google Play ↗</a>`
        : `<span class="app-status">${escapeHtml(app.status || "Link not added")}</span>`;
      return `<article class="app-card">
        <div class="app-card-top">
          <div class="app-icon" style="--icon-bg:${safeColor(app.iconBackground)}">${escapeHtml(app.symbol || "A")}</div>
          <div><h3>${escapeHtml(app.name || "Untitled app")}</h3><span class="app-category">${escapeHtml(app.category || "Android app")}</span></div>
        </div>
        <p>${escapeHtml(app.description || "")}</p>
        <div class="app-card-bottom"><span class="app-status">${hasLink ? "Available on Google Play" : "Portfolio preview"}</span>${action}</div>
      </article>`;
    }).join("");
  }
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }));
  }
  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, char => ({
      "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"
    }[char]));
  }
  function safeColor(value) {
    const color = String(value || "#b9f36b");
    return /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/.test(color) ? color : "#b9f36b";
  }
})();