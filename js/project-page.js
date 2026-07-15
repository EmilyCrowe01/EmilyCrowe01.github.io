const params = new URLSearchParams(window.location.search);
const slug = params.get("name");
const project = projects.find(function (p) {
  return p.slug === slug;
});

if (project) {
  document.title = project.name + " — Emily Crowe";

  const content = document.getElementById("project-content");
  document.documentElement.style.setProperty(
    "--page-accent",
    project.accentColor,
  );
  content.innerHTML = `
    <section class="detail-hero">
      <a href="index.html#projects" class="back-link">← Back to projects</a>
      <div class="detail-hero-inner">
  <div class="detail-icon" style="background:${project.iconGradient}">
    ${project.icon ? `<img src="${project.icon}" alt="${project.name}" />` : ''}
  </div>
  <div class="detail-header">
    <div class="detail-header-top">
      <h1 class="detail-title">${project.name}</h1>
      <span class="project-badge" style="color:${project.accentColor};background:${project.accentColor}22;border-color:${project.accentColor}44">${project.badge}</span>
    </div>
    <p class="detail-sub">${project.desc}</p>
  </div>
</div>
      <div class="detail-links">
        ${project.links
      .map(function (l) {
        return `<a class="proj-link ${l.cls || ""}" href="${l.href}" target="_blank" style="--page-accent:${project.accentColor}">${l.label}</a>`;
      })
      .join("")}
      </div>
    </section>

    <section class="detail-section">
      <div class="section-label">About</div>
      <h2 class="section-title">What it does</h2>
      <p class="detail-text">${project.longDesc}</p>
    </section>

    <section class="detail-section">
      <div class="section-label">Process</div>
      <h2 class="section-title">How I built it</h2>
      <p class="detail-text">${project.behind}</p>
    </section>

    ${project.video
      ? `
    <section class="detail-section">
      <div class="section-label">Demo</div>
      <h2 class="section-title">See it in action</h2>
      <iframe class="detail-video" src="https://www.youtube.com/embed/${project.video}" frameborder="0" allowfullscreen></iframe>
    </section>
    `
      : ""
    }

    ${project.screenshots && project.screenshots.length
      ? `
    <section class="detail-section">
      <div class="section-label">Screenshots</div>
      <h2 class="section-title">A closer look</h2>
      <div class="screenshots-grid">
        ${project.screenshots
        .map(function (s) {
          return `<img src="${s}" alt="${project.name} screenshot" class="screenshot" />`;
        })
        .join("")}
      </div>
    </section>
    `
      : ""
    }
  `;
} else {
  document.getElementById("project-content").innerHTML = `
    <section class="detail-section">
      <p style="text-align:center;padding:200px 24px;">Project not found. <a href="index.html" style="color:#9B6DFF">Go back home.</a></p>
    </section>
  `;
}
