export const Header = ({ brand, logo, links }) => `
  <header class="site-header">
    <a class="brand-mark" href="#top" aria-label="${brand} home">
      <img src="${logo}" alt="" />
      <span>${brand}</span>
    </a>
    <nav class="nav-links" aria-label="Primary navigation">
      ${links.map((link) => `<a href="${link.href}">${link.label}</a>`).join("")}
    </nav>
  </header>
`;
