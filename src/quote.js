export const initQuoteForm = () => {
  const form = document.querySelector("[data-quote-form]");
  if (!form) return;

  const status = form.querySelector("[data-quote-status]");
  const submit = form.querySelector("[data-quote-submit]");
  const submitLabel = submit.textContent;

  const setStatus = (message, tone) => {
    status.textContent = message;
    status.dataset.tone = tone;
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
    } catch {
      setStatus("We couldn't send your request right now. Please call us at +1 832-562-5304 or email justin@andersontileandgranite.com.", "error");
    } finally {
      submit.disabled = false;
      submit.textContent = submitLabel;
    }
  });
};
