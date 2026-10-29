export const CatalogSearch = ({ categories, total, rating, reviews, highlights, serviceAreas }) => `
  <div class="catalog-search-wrap">
    <form class="catalog-search" data-catalog-search>
      <div class="catalog-field">
        <label for="catalog-space">Space</label>
        <select id="catalog-space" name="space">
          <option value="all">All spaces</option>
          ${categories.map((category) => `<option value="${category.key}">${category.name}</option>`).join("")}
        </select>
      </div>
      <div class="catalog-field">
        <span>Specialties</span>
        <strong>Tile · Granite · Quartz · Porcelain</strong>
      </div>
      <div class="catalog-field catalog-field--areas">
        <span>Service area</span>
        <strong>${serviceAreas.join(", ")} &amp; surrounding areas, Texas</strong>
      </div>
      <button class="catalog-search-button" type="submit" data-search-label>Explore ${total} items</button>
    </form>
    <ul class="trust-row">
      <li><a class="trust-rating" href="#reviews"><strong>${rating}</strong><span class="trust-stars" aria-label="5 out of 5 stars">★★★★★</span>${reviews}</a></li>
      ${highlights.map((item) => `<li>${item}</li>`).join("")}
    </ul>
  </div>
`;
