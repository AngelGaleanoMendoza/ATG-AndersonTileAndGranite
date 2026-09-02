export const Process = ({ eyebrow, title, steps }) => `
  <section class="process-section" id="process">
    <div class="section-heading compact">
      <p class="eyebrow">${eyebrow}</p>
      <h2>${title}</h2>
    </div>
    <ol class="process-list">
      ${steps.map((step) => `<li>${step}</li>`).join("")}
    </ol>
  </section>
`;
