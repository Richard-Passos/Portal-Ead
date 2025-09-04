declare const bootstrap: any;

const contact_form = document.getElementById('contact_form');

const submit_contact_form = (ev: SubmitEvent) => {
  ev.preventDefault();

  const form_el = ev.currentTarget as HTMLFormElement;
  const elements = form_el.elements;

  const { value: name } = elements.namedItem('name') as HTMLInputElement,
    { value: email } = elements.namedItem('name') as HTMLInputElement,
    { value: message } = elements.namedItem('message') as HTMLTextAreaElement;

  if (!name || !email || message.length < 2) {
    const error_toast_el = document.getElementById('error_toast');
    const error_toast = new bootstrap.Toast(error_toast_el);

    error_toast.show();

    return;
  }

  const contact_toast_el = document.getElementById('contact_toast');
  const contact_toast = new bootstrap.Toast(contact_toast_el);

  contact_toast.show();

  form_el.reset();
};

contact_form?.addEventListener('submit', submit_contact_form);
