const constraints = {
  name: {
    presence: { allowEmpty: false },
  },
  email: {
    presence: { allowEmpty: false },
    email: true,
  },
  tel: {
    presence: { allowEmpty: false },
  },
  asunto: {
    presence: { allowEmpty: false },
  },
  message: {
    presence: { allowEmpty: false },
  },
};

const form = document.getElementById("contact-form");

form.addEventListener(
  "submit",
  function (event) {
    const formValues = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      tel: form.elements.tel.value,
      asunto: form.elements.asunto.value,
      message: form.elements.message.value,
    };

    const errors = validate(formValues, constraints);

    if (errors) {
      event.preventDefault();
      const errorMessage = Object.values(errors)
        .map(function (fieldValues) {
          return fieldValues.join(", ");
        })
        .join("\n");

      alert(errorMessage);
    }
  },
  false
);
