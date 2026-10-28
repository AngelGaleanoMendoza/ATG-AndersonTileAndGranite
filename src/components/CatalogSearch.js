export const CatalogSearch = ({ categories, total, rating, reviews, highlights }) => `
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
      <div class="catalog-field">
        <span>Service area</span>
        <strong>Greater Houston, Texas</strong>
      </div>
      <button class="catalog-search-button" type="submit" data-search-label>Explore ${total} items</button>
    </form>
    <ul class="trust-row">
      <li><strong>${rating}</strong><span class="trust-stars" aria-hidden="true">★★★★★</span>${reviews}</li>
      ${highlights.map((item) => `<li>${item}</li>`).join("")}
    </ul>
  </div>
`;
