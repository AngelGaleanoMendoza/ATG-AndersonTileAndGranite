export const initQuoteForm = () => {
  const form = document.querySelector("[data-quote-form]");
  if (!form) return;

  const status = form.querySelector("[data-quote-status]");
  const submit = form.querySelector("[data-quote-submit]");
  const submitLabel = submit.textContent;
  const fallback = form.querySelector("[data-quote-fallback]");
  const fallbackSms = form.querySelector("[data-quote-fallback-sms]");
  const fallbackMail = form.querySelector("[data-quote-fallback-mail]");

  const setStatus = (message, tone) => {
    status.textContent = message;
    status.dataset.tone = tone;
  };

  // If the form service is unavailable, the visitor can still send the same details from their own phone.
  const showFallback = (data) => {
    const summary = [
      "Hi Justin, I'd like a personalized quote.",
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      `Email: ${data.email}`,
      `City: ${data.city}`,
      `Project: ${data.project_type}`,
      `Preferred contact: ${data.preferred_contact}`,
      "",
      data.message,
    ].join("\n");
    const subject = `Quote request: ${data.project_type} · ${data.name} (${data.city})`;

    fallbackSms.href = `${form.dataset.sms}?&body=${encodeURIComponent(summary)}`;
    fallbackMail.href = `mailto:${form.dataset.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(summary)}`;
    fallback.hidden = false;
  };

  if (new URLSearchParams(window.location.search).get("quote") === "sent") {
    setStatus("Thank you! Your request was sent. Justin will contact you soon.", "success");
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const data = Object.fromEntries(new FormData(form));
    if (data._honey) return;
    delete data._next;
    data._subject = `New quote request: ${data.project_type} · ${data.name} (${data.city})`;
    data._captcha = "false";

    submit.disabled = true;
    submit.textContent = "Sending…";
    setStatus("", "");
    fallback.hidden = true;

    try {
      const response = await fetch(form.dataset.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || String(result.success) === "false") throw new Error(result.message || "Request failed");
      form.reset();
      setStatus(`Thank you, ${data.name.split(" ")[0]}! Your request was sent. Justin will contact you soon.`, "success");
    } catch (error) {
      console.warn("Quote form delivery failed:", error.message);
      setStatus(
        `We couldn't send your request online. Your details are still here — send them straight to Justin Anderson, the owner, by text or email below, or call ${form.dataset.phone}.`,
        "error",
      );
      showFallback(data);
    } finally {
      submit.disabled = false;
      submit.textContent = submitLabel;
    }
  });
};
