export const ContactBand = (contact, serviceAreas, owner) => `
  <section class="contact-band quote-section" id="contact">
    <div class="quote-intro">
      <div class="contact-copy">
        <p class="eyebrow">${contact.eyebrow}</p>
        <h2>${contact.title}</h2>
        <p>${contact.body}</p>
      </div>
      <div class="quote-owner">
        <img src="${owner.portrait}" alt="${owner.portraitAlt}" loading="lazy" />
        <div>
          <strong>${owner.name}</strong>
          <span>${contact.ownerNote}</span>
        </div>
      </div>
      <a class="button primary quote-call" href="${contact.phoneHref}">${contact.cta} · ${contact.phone}</a>
      <div class="contact-details">
        <a href="${contact.smsHref}"><span>Text Justin</span><strong>${contact.phone}</strong></a>
        <a href="${contact.emailHref}"><span>Email Justin</span><strong>${contact.email}</strong></a>
        <a href="${contact.mapHref}" target="_blank" rel="noreferrer"><span>Location</span><strong>${contact.location}</strong></a>
        <a class="text-link" href="${contact.instagramHref}" target="_blank" rel="noreferrer">View Instagram</a>
      </div>
    </div>

    <form
      class="quote-form"
      action="${contact.formFallback}"
      method="POST"
      data-quote-form
      data-endpoint="${contact.formEndpoint}"
      data-sms="${contact.smsHref}"
      data-email="${contact.email}"
      data-phone="${contact.phone}"
    >
      <input type="hidden" name="_subject" value="New quote request · andersontileandgranite.com" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_next" value="https://andersontileandgranite.com/?quote=sent#contact" />
      <input class="quote-honey" type="text" name="_honey" tabindex="-1" autocomplete="off" aria-hidden="true" />

      <div class="quote-grid">
        <label class="quote-field">
          <span>Full name *</span>
          <input type="text" name="name" autocomplete="name" required />
        </label>
        <label class="quote-field">
          <span>Email *</span>
          <input type="email" name="email" autocomplete="email" required />
        </label>
        <label class="quote-field">
          <span>Phone *</span>
          <input type="tel" name="phone" autocomplete="tel" required />
        </label>
        <label class="quote-field">
          <span>City *</span>
          <input type="text" name="city" list="quote-areas" autocomplete="address-level2" required />
          <datalist id="quote-areas">
            ${serviceAreas.map((area) => `<option value="${area}"></option>`).join("")}
          </datalist>
        </label>
        <label class="quote-field quote-field--wide">
          <span>Project type *</span>
          <select name="project_type" required>
            <option value="">Select a project</option>
            ${contact.services.map((service) => `<option>${service}</option>`).join("")}
          </select>
        </label>
        <fieldset class="quote-field quote-field--wide quote-methods">
          <legend>How should we contact you? *</legend>
          <div>
            ${contact.contactMethods.map((method, index) => `
              <label class="quote-method">
                <input type="radio" name="preferred_contact" value="${method}" ${index === 0 ? "checked" : ""} />
                <span>${method}</span>
              </label>
            `).join("")}
          </div>
        </fieldset>
        <label class="quote-field quote-field--wide">
          <span>Tell us about your project *</span>
          <textarea name="message" rows="5" required placeholder="Example: I'd like to remodel my patio with an outdoor kitchen and stone countertops."></textarea>
        </label>
      </div>

      <button class="button primary quote-submit" type="submit" data-quote-submit>Get my personalized quote</button>
      <p class="quote-status" data-quote-status role="status" aria-live="polite"></p>
      <div class="quote-fallback" data-quote-fallback hidden>
        <a class="button primary" data-quote-fallback-sms>Text my request to Justin</a>
        <a class="button quote-fallback-mail" data-quote-fallback-mail>Email my request to Justin</a>
      </div>
    </form>
  </section>
`;
