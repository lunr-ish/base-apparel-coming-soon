const form = document.querySelector("#subscribe-form");

const EMAIL_REGEX = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = form.email?.value;

  form.classList.toggle(
    "error",
    !(email && email.length > 1 && EMAIL_REGEX.test(email))
  );
});
