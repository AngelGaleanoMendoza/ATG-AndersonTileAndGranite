export const Hero = (hero) => `
  <section class="hero-section" id="top" style="--hero-image: url('${hero.image}')">
    <div class="hero-shade"></div>
    <div class="hero-content">
      <p class="eyebrow">${hero.eyebrow}</p>
      <h1>${hero.title}</h1>
      <p>${hero.body}</p>
      <div class="action-row">
        <a class="button primary" href="${hero.primaryAction.href}">${hero.primaryAction.label}</a>
        <a class="button secondary" href="${hero.secondaryAction.href}">${hero.secondaryAction.label}</a>
      </div>
    </div>
  </section>
`;
