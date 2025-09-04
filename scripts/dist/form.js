"use strict";
var contact_form = document.getElementById('contact_form');
var submit_contact_form = function (ev) {
    ev.preventDefault();
    var form_el = ev.currentTarget;
    var elements = form_el.elements;
    var name = elements.namedItem('name').value, email = elements.namedItem('name').value, message = elements.namedItem('message').value;
    if (!name || !email || message.length < 2) {
        var error_toast_el = document.getElementById('error_toast');
        var error_toast = new bootstrap.Toast(error_toast_el);
        error_toast.show();
        return;
    }
    var contact_toast_el = document.getElementById('contact_toast');
    var contact_toast = new bootstrap.Toast(contact_toast_el);
    contact_toast.show();
    form_el.reset();
};
contact_form === null || contact_form === void 0 ? void 0 : contact_form.addEventListener('submit', submit_contact_form);
