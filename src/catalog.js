import { icon } from "./components/icons.js";

const PAGE_SIZE = 12;
const SPANS = [3, 2, 2, 3, 2, 2];

export const initCatalog = ({ categories, items }) => {
  const root = document.querySelector("#portfolio");
  if (!root) return;

  const grid = root.querySelector("[data-gallery-grid]");
  const title = root.querySelector("[data-gallery-title]");
  const count = root.querySelector("[data-gallery-count]");
  const more = root.querySelector("[data-gallery-more]");
  const chips = [...root.querySelectorAll("[data-filter]")];
  const galleryBlock = root.querySelector("#portfolio-gallery");
  const searchForm = document.querySelector("[data-catalog-search]");
  const select = searchForm?.querySelector("select");
  const searchLabel = searchForm?.querySelector("[data-search-label]");

  const lightbox = root.querySelector("[data-lightbox]");
  const media = lightbox.querySelector("[data-lightbox-media]");
  const caption = lightbox.querySelector("[data-lightbox-caption]");

  const byKey = Object.fromEntries(categories.map((category) => [category.key, category]));
  const defaultTitle = title.textContent;
  let filter = "all";
  let visible = PAGE_SIZE;
  let current = [];
  let openIndex = -1;
  let lastFocus = null;

  const unit = (key) => (key === "all" ? "items" : key === "videos" ? "clips" : "photos");

  const tile = (item, index) => `
    <button class="gallery-tile span-${SPANS[index % SPANS.length]}" type="button" data-index="${index}" aria-label="Open ${item.type === "video" ? "video" : "photo"}: ${byKey[item.category].name}">
      <img src="${item.thumb}" alt="${item.alt}" loading="lazy" />
      ${item.type === "video" ? `<span class="gallery-play">${icon("play")}</span>` : ""}
      <span class="gallery-label">${byKey[item.category].name}</span>
    </button>
  `;

  const render = () => {
    current = filter === "all" ? items : items.filter((item) => item.category === filter);
    const shown = current.slice(0, visible);
    grid.innerHTML = shown.map(tile).join("");
    count.textContent = `Showing ${shown.length} of ${current.length} ${unit(filter)}`;
    more.hidden = shown.length >= current.length;
    title.textContent = filter === "all" ? defaultTitle : byKey[filter].name;
    chips.forEach((chip) => {
      const active = chip.dataset.filter === filter;
      chip.classList.toggle("is-active", active);
      chip.setAttribute("aria-pressed", String(active));
    });
    if (select) select.value = filter;
    if (searchLabel) searchLabel.textContent = `Explore ${current.length} ${unit(filter)}`;
  };

  const setFilter = (key) => {
    filter = byKey[key] ? key : "all";
    visible = PAGE_SIZE;
    render();
  };

  const showGallery = () => galleryBlock.scrollIntoView({ behavior: "smooth", block: "start" });

  document.querySelectorAll(".hero-tile[data-category], .collection-card[data-category]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      setFilter(link.dataset.category);
      showGallery();
    });
  });
  chips.forEach((chip) => chip.addEventListener("click", () => setFilter(chip.dataset.filter)));
  select?.addEventListener("change", () => setFilter(select.value));
  searchForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    setFilter(select.value);
    showGallery();
  });
  more.addEventListener("click", () => {
    visible += PAGE_SIZE;
    render();
  });

  const show = (index) => {
    openIndex = (index + current.length) % current.length;
    const item = current[openIndex];
    media.innerHTML = item.type === "video"
      ? `<video src="${item.src}" poster="${item.thumb}" controls autoplay playsinline></video>`
      : `<img src="${item.src}" alt="${item.alt}" />`;
    caption.textContent = `${byKey[item.category].name} · ${openIndex + 1} / ${current.length}`;
  };

  const open = (index) => {
    lastFocus = document.activeElement;
    show(index);
    lightbox.hidden = false;
    document.body.classList.add("has-lightbox");
    lightbox.querySelector(".lightbox-close").focus();
  };

  const close = () => {
    lightbox.hidden = true;
    media.innerHTML = "";
    openIndex = -1;
    document.body.classList.remove("has-lightbox");
    lastFocus?.focus();
  };

  grid.addEventListener("click", (event) => {
    const button = event.target.closest(".gallery-tile");
    if (button) open(Number(button.dataset.index));
  });
  lightbox.querySelectorAll("[data-lightbox-close]").forEach((el) => el.addEventListener("click", close));
  lightbox.querySelector("[data-lightbox-prev]").addEventListener("click", () => show(openIndex - 1));
  lightbox.querySelector("[data-lightbox-next]").addEventListener("click", () => show(openIndex + 1));
  document.addEventListener("keydown", (event) => {
    if (lightbox.hidden) return;
    if (event.key === "Escape") close();
    if (event.key === "ArrowLeft") show(openIndex - 1);
    if (event.key === "ArrowRight") show(openIndex + 1);
  });

  render();
};
