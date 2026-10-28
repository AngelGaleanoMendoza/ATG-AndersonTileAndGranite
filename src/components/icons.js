const paths = {
  kitchen: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><rect x="7" y="12" width="10" height="6" rx="1"/>',
  bath: '<path d="M4 12h16v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"/><path d="M6 12V6a2 2 0 0 1 4 0"/><path d="M7 19l-1 2M17 19l1 2"/>',
  fireplace: '<path d="M3 21V6h18v15"/><path d="M2 6h20"/><path d="M7 21v-8h10v8"/>',
  floor: '<rect x="3" y="3" width="18" height="18" rx="1"/><path d="M3 9h18M3 15h18M9 3v6M15 9v6M9 15v6"/>',
  outdoor: '<circle cx="12" cy="9" r="5"/><path d="M12 14v7M8 21h8"/>',
  house: '<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',
  crew: '<path d="M6 16a6 6 0 0 1 12 0"/><path d="M10 10V7h4v3"/><path d="M3 16h18v2H3z"/>',
  play: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M10 9l5 3-5 3z"/>',
  close: '<path d="M6 6l12 12M18 6L6 18"/>',
  prev: '<path d="M15 5l-7 7 7 7"/>',
  next: '<path d="M9 5l7 7-7 7"/>',
};

export const icon = (name, className = "icon") =>
  `<svg class="${className}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${paths[name]}</svg>`;
