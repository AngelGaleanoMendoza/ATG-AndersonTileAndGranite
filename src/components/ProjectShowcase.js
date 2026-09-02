export const ProjectShowcase = ({ eyebrow, title, body, stats, images }) => `
  <section class="showcase-section" id="projects">
    <div class="showcase-copy">
      <p class="eyebrow">${eyebrow}</p>
      <h2>${title}</h2>
      <p>${body}</p>
    </div>
    <div class="stat-grid">
      ${stats
        .map(
          ([label, value]) => `
            <div class="stat-item">
              <strong>${label}</strong>
              <span>${value}</span>
            </div>
          `
        )
        .join("")}
    </div>
    <div class="project-gallery">
      ${images.map((image) => `<figure><img src="${image.src}" alt="${image.alt}" loading="lazy" /></figure>`).join("")}
    </div>
  </section>
`;
