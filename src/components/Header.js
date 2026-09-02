export const Header = ({ brand, links }) => `
  <header class="site-header">
    <a class="brand-mark" href="#top" aria-label="${brand} home">
      <span class="brand-stone">ATG</span>
      <span>${brand}</span>
    </a>
    <nav class="nav-links" aria-label="Primary navigation">
      ${links.map((link) => `<a href="${link.href}">${link.label}</a>`).join("")}
    </nav>
  </header>
`;
