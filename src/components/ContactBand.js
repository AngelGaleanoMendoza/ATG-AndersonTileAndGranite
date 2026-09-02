export const ContactBand = ({ title, body, cta }) => `
  <section class="contact-band" id="contact">
    <div>
      <h2>${title}</h2>
      <p>${body}</p>
    </div>
    <a class="button primary" href="mailto:info@andersontileandgranite.com">${cta}</a>
  </section>
`;
