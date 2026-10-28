export const Process = ({ eyebrow, title, steps, photos }) => `
  <section class="process-section" id="process">
    <div class="process-layout">
      <div>
        <div class="section-heading compact">
          <p class="eyebrow">${eyebrow}</p>
          <h2>${title}</h2>
        </div>
        <ol class="process-list">
          ${steps.map((step) => `<li>${step}</li>`).join("")}
        </ol>
      </div>
      <div class="process-photos">
        ${photos.map((photo) => `<img src="${photo.src}" alt="${photo.alt}" loading="lazy" />`).join("")}
      </div>
    </div>
  </section>
`;
