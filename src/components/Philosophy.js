export const Philosophy = ({ eyebrow, title, panels }) => `
  <section class="philosophy-section" id="about">
    <div class="section-heading">
      <p class="eyebrow">${eyebrow}</p>
      <h2>${title}</h2>
    </div>
    <div class="philosophy-grid">
      ${panels.map((panel, index) => `
        <article class="philosophy-panel">
          <span class="philosophy-number">${String(index + 1).padStart(2, "0")}</span>
          <h3>${panel.label}</h3>
          <p class="philosophy-lead">${panel.lead}</p>
          ${panel.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
        </article>
      `).join("")}
    </div>
  </section>
`;
