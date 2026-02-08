function contact(event) {
  event.preventDefault();
}
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");

  loading.classList.add("modal__overlay--visible");function contact(event) {
  event.preventDefault();
const loading = document.querySelector(".modal__overlay--loading");
const success = document.querySelector(".modal__overlay--success");
loading.classList += " modal__overlay--visible";

  emailjs
    .sendForm(
      'service_30ar08o',
      'template_1exev7r',
      event.target,
      'IeX856uPJs9S3lArT'
    ).then(() => {
  loading.classList.remove("modal__overlay--visible");
  success.classList += " modal__overlay--visible"
       }).catch (() => {
        loading.classList.remove("modal__overlay--visible")
        alert(
            "This email service is temporarily unavailable. Please contact me directly @dmack1boss@gmail.com"
        );

       })
    }

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
}





