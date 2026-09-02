export const Footer = ({ text, logo }) => `
  <footer class="site-footer">
    <img src="${logo}" alt="Anderson Tile and Granite" />
    <p>${text}</p>
    <p>&copy; ${new Date().getFullYear()} All rights reserved.</p>
  </footer>
`;
