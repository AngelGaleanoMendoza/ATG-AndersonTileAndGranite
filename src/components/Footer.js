export const Footer = ({ text, logo }) => `
  <footer class="site-footer">
    <img src="${logo}" alt="Anderson Premium Construction And Remodeling" />
    <p>${text}</p>
    <p>&copy; ${new Date().getFullYear()} All rights reserved.</p>
  </footer>
`;
