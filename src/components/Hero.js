export const Hero = (hero) => `
  <section class="hero-section" id="top" style="background-image: url('${hero.image}')">
    <div class="hero-shade"></div>
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
    <p class="hero-signature">${hero.signature}</p>
  </section>
`;
