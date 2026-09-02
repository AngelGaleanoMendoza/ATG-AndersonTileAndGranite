export const StickyCards = ({ eyebrow, title, intro, items }) => `
  <section class="stack-section" id="services">
    <div class="section-heading">
      <p class="eyebrow">${eyebrow}</p>
      <h2>${title}</h2>
      <p>${intro}</p>
    </div>
    <div class="stack-list">
      ${items
        .map(
          (item, index) => `
            <article class="service-card" style="--card-index: ${index}">
              <figure>
                <img src="${item.image}" alt="${item.title}" loading="lazy" />
              </figure>
              <div class="service-card-content">
                <span>0${index + 1}</span>
                <h3>${item.title}</h3>
                <p class="service-subtitle">${item.subtitle}</p>
                <p>${item.body}</p>
              </div>
            </article>
          `
        )
        .join("")}
    </div>
  </section>
`;
