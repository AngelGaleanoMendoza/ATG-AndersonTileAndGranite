export const ProjectShowcase = ({ eyebrow, title, body, stats, projects }) => `
  <section class="showcase-section" id="projects">
    <div class="showcase-intro">
      <div class="showcase-copy">
        <p class="eyebrow">${eyebrow}</p>
        <h2>${title}</h2>
        <p>${body}</p>
      </div>
    </div>
    <div class="project-carousel" tabindex="0" aria-label="Selected projects">
      ${projects.map((project, index) => `
        <article class="project-card project-card--${project.format}" data-slide="${index}">
          <figure class="project-visual">
            <img src="${project.src}" alt="${project.alt}" loading="lazy" />
          </figure>
          <div class="project-content">
            <span class="project-number">${String(index + 1).padStart(2, "0")}</span>
            <div>
              <span>${project.category}</span>
              <h3>${project.title}</h3>
            </div>
          </div>
        </article>
      `).join("")}
    </div>
    <div class="stat-grid">
      ${stats.map(([label, value]) => `
        <div class="stat-item">
          <strong>${label}</strong>
          <span>${value}</span>
        </div>
      `).join("")}
    </div>
  </section>
`;
