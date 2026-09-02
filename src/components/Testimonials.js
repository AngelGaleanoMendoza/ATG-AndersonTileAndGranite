const Stars = (rating) => `
  <span class="review-stars" aria-label="${rating} out of 5 stars">
    ${Array.from({ length: rating }, () => "&#9733;").join("")}
  </span>
`;

export const Testimonials = ({ eyebrow, title, intro, rating, total, sourceHref, reviews }) => `
  <section class="reviews-section" id="reviews">
    <div class="reviews-heading">
      <div class="reviews-copy">
        <p class="eyebrow">${eyebrow}</p>
        <h2>${title}</h2>
        <p>${intro}</p>
      </div>
      <a class="rating-summary" href="${sourceHref}" target="_blank" rel="noreferrer" aria-label="View all Google reviews">
        <strong>${rating}</strong>
        <span>${Stars(5)}<small>${total}</small></span>
      </a>
    </div>

    <div class="reviews-carousel" tabindex="0" aria-label="Customer reviews">
      ${reviews.map((review, index) => `
        <article class="review-card" data-review-slide="${index}">
          <figure class="review-photo">
            <img src="${review.image}" alt="${review.imageAlt}" loading="lazy" />
          </figure>
          <div class="review-body">
            <div class="review-card-top">
              ${Stars(review.rating)}
              <span class="review-index">${String(index + 1).padStart(2, "0")}</span>
            </div>
            <blockquote>&ldquo;${review.text}&rdquo;</blockquote>
            <footer>
              <span class="review-avatar" aria-hidden="true">${review.initials}</span>
              <div>
                <strong>${review.author}</strong>
                <a href="${review.href}" target="_blank" rel="noreferrer">Google review</a>
              </div>
            </footer>
          </div>
        </article>
      `).join("")}
    </div>

    <div class="reviews-navigation">
      <span class="reviews-status" aria-live="polite">01 / ${String(reviews.length).padStart(2, "0")}</span>
      <div>
        <button class="review-button review-prev" type="button" aria-label="Previous review">&#8592;</button>
        <button class="review-button review-next" type="button" aria-label="Next review">&#8594;</button>
      </div>
    </div>
  </section>
`;

export const initTestimonials = () => {
  const carousel = document.querySelector(".reviews-carousel");
  if (!carousel) return;

  const cards = [...carousel.querySelectorAll(".review-card")];
  const status = document.querySelector(".reviews-status");
  const move = (direction) => {
    const cardWidth = cards[0].getBoundingClientRect().width;
    carousel.scrollBy({ left: direction * (cardWidth + 24), behavior: "smooth" });
  };

  document.querySelector(".review-prev").addEventListener("click", () => move(-1));
  document.querySelector(".review-next").addEventListener("click", () => move(1));

  carousel.addEventListener("scroll", () => {
    const nearest = cards.reduce((best, card, index) => {
      const distance = Math.abs(card.offsetLeft - carousel.scrollLeft);
      return distance < best.distance ? { index, distance } : best;
    }, { index: 0, distance: Infinity });
    status.textContent = `${String(nearest.index + 1).padStart(2, "0")} / ${String(cards.length).padStart(2, "0")}`;
  }, { passive: true });
};
