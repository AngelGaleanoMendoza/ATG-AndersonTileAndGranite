import { icon } from "./icons.js";

const unitFor = (category) => (category.key === "videos" ? "clips" : "photos");

export const Portfolio = ({ browse, gallery }, { categories, items }) => `
  <section class="portfolio-section" id="portfolio">
    <div class="portfolio-heading">
      <div>
        <p class="eyebrow">${browse.eyebrow}</p>
        <h2>${browse.title}</h2>
      </div>
      <p>${items.filter((item) => item.type === "photo").length} photos · ${items.filter((item) => item.type === "video").length} videos</p>
    </div>
    <div class="collection-grid">
      ${categories.map((category) => `
        <a class="collection-card" href="#portfolio-gallery" data-category="${category.key}">
          <div class="collection-cover">
            <img src="${category.cover}" alt="${category.name}" loading="lazy" />
            <span>${category.count} ${unitFor(category)}</span>
          </div>
          <div class="collection-body">
            <h3>${category.name}</h3>
            <p>${category.desc}</p>
            <span class="collection-link">View collection →</span>
          </div>
        </a>
      `).join("")}
    </div>

    <div class="gallery-block" id="portfolio-gallery">
      <p class="eyebrow">${gallery.eyebrow}</p>
      <h2 data-gallery-title>${gallery.title}</h2>
      <div class="gallery-filters" role="group" aria-label="Filter portfolio by space">
        <button class="gallery-chip is-active" type="button" data-filter="all" aria-pressed="true">All · ${items.length}</button>
        ${categories.map((category) => `
          <button class="gallery-chip" type="button" data-filter="${category.key}" aria-pressed="false">${category.name} · ${category.count}</button>
        `).join("")}
      </div>
      <div class="gallery-grid" data-gallery-grid></div>
      <div class="gallery-footer">
        <p data-gallery-count></p>
        <button class="gallery-more" type="button" data-gallery-more>Load more</button>
      </div>
    </div>

    <div class="lightbox" data-lightbox hidden>
      <div class="lightbox-backdrop" data-lightbox-close></div>
      <div class="lightbox-dialog" role="dialog" aria-modal="true" aria-label="Portfolio viewer">
        <button class="lightbox-button lightbox-close" type="button" data-lightbox-close aria-label="Close viewer">${icon("close")}</button>
        <button class="lightbox-button lightbox-prev" type="button" data-lightbox-prev aria-label="Previous">${icon("prev")}</button>
        <div class="lightbox-media" data-lightbox-media></div>
        <button class="lightbox-button lightbox-next" type="button" data-lightbox-next aria-label="Next">${icon("next")}</button>
        <p class="lightbox-caption" data-lightbox-caption></p>
      </div>
    </div>
  </section>
`;
