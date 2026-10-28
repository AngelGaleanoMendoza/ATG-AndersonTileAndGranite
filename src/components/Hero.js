import { icon } from "./icons.js";

const unitFor = (category) => (category.key === "videos" ? "clips" : "photos");

export const Hero = (hero, categories) => `
  <section class="hero-section" id="top" style="background-image: url('${hero.image}')">
    <div class="hero-shade"></div>
    <div class="hero-layout">
      <div class="hero-content">
        <p class="eyebrow">${hero.eyebrow}</p>
        <h1><em>${hero.lead}</em>${hero.title}</h1>
        <span class="hero-rule" aria-hidden="true"></span>
        <p>${hero.body}</p>
        <div class="action-row">
          <a class="button primary" href="${hero.primaryAction.href}">${hero.primaryAction.label}</a>
          <a class="button secondary" href="${hero.secondaryAction.href}">${hero.secondaryAction.label}</a>
        </div>
      </div>
      <nav class="hero-panel" aria-label="Browse the portfolio">
        <p class="hero-panel-title">Browse the portfolio</p>
        <div class="hero-panel-grid">
          ${categories.map((category) => `
            <a class="hero-tile" href="#portfolio-gallery"data-category="${category.key}">
              ${icon(category.icon, "icon hero-tile-icon")}
              <strong>${category.name}</strong>
              <span>${category.count} ${unitFor(category)}</span>
            </a>
          `).join("")}
        </div>
      </nav>
    </div>
    <p class="hero-signature">${hero.signature}</p>
  </section>
`;
