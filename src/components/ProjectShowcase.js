export const ProjectShowcase = ({ eyebrow, title, body, stats, projects }) => `
  <section class="showcase-section" id="projects">
    <div class="showcase-intro">
      <div class="showcase-copy">
        <p class="eyebrow">${eyebrow}</p>
        <h2>${title}</h2>
        <p>${body}</p>
      </div>
      <div class="carousel-controls" aria-label="Project carousel controls">
        <button class="carousel-button carousel-prev" type="button" aria-label="Previous project">&#8592;</button>
        <span class="carousel-status" aria-live="polite">01 / ${String(projects.length).padStart(2, "0")}</span>
        <button class="carousel-button carousel-next" type="button" aria-label="Next project">&#8594;</button>
      </div>
    </div>
    <div class="project-carousel" tabindex="0" aria-label="Selected projects">
      ${projects.map((project, index) => `
        <article class="project-card" data-slide="${index}">
          <figure class="project-visual">
            <img src="${project.src}" alt="${project.alt}" loading="lazy" />
          </figure>
          <div class="project-content">
            <span>${project.category}</span>
            <h3>${project.title}</h3>
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

export const initProjectShowcase = () => {
  const carousel = document.querySelector(".project-carousel");
  if (!carousel) return;

  const cards = [...carousel.querySelectorAll(".project-card")];
  const status = document.querySelector(".carousel-status");
  const move = (direction) => {
    const cardWidth = cards[0].getBoundingClientRect().width;
    carousel.scrollBy({ left: direction * (cardWidth + 24), behavior: "smooth" });
  };

  document.querySelector(".carousel-prev").addEventListener("click", () => move(-1));
  document.querySelector(".carousel-next").addEventListener("click", () => move(1));

  carousel.addEventListener("scroll", () => {
    const nearest = cards.reduce((best, card, index) => {
      const distance = Math.abs(card.offsetLeft - carousel.scrollLeft);
      return distance < best.distance ? { index, distance } : best;
    }, { index: 0, distance: Infinity });
    status.textContent = `${String(nearest.index + 1).padStart(2, "0")} / ${String(cards.length).padStart(2, "0")}`;
  }, { passive: true });
};
