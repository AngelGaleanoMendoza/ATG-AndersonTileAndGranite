export const ContactBand = (contact) => `
  <section class="contact-band" id="contact">
    <div class="contact-copy">
      <p class="eyebrow">${contact.eyebrow}</p>
      <h2>${contact.title}</h2>
      <p>${contact.body}</p>
    </div>
    <div class="contact-details">
      <a href="${contact.phoneHref}"><span>Phone</span><strong>${contact.phone}</strong></a>
      <a href="${contact.emailHref}"><span>Email</span><strong>${contact.email}</strong></a>
      <a href="${contact.mapHref}" target="_blank" rel="noreferrer"><span>Location</span><strong>${contact.location}</strong></a>
      <a class="text-link" href="${contact.instagramHref}" target="_blank" rel="noreferrer">View Instagram</a>
    </div>
    <a class="button primary" href="${contact.phoneHref}">${contact.cta}</a>
  </section>
`;
