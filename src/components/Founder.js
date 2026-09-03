export const Founder = (founder) => `
  <section class="founder-section" id="founder">
    <div class="section-heading">
      <p class="eyebrow">${founder.eyebrow}</p>
      <h2>${founder.title}</h2>
      <p>${founder.intro}</p>
    </div>
    <div class="founder-layout">
      <figure class="founder-portrait">
        <img src="${founder.portrait}" alt="${founder.portraitAlt}" loading="lazy" />
        <figcaption class="founder-plate">
          <strong>${founder.name}</strong>
          <span>${founder.role}</span>
        </figcaption>
      </figure>
      <div class="founder-body">
        <blockquote>&ldquo;${founder.quote}&rdquo;</blockquote>
        ${founder.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
        <div class="founder-highlights">
          ${founder.highlights.map(([label, value]) => `
            <div class="founder-highlight">
              <strong>${label}</strong>
              <span>${value}</span>
            </div>
          `).join("")}
        </div>
        <a class="text-link" href="${founder.action.href}">${founder.action.label}</a>
      </div>
    </div>
  </section>
`;
