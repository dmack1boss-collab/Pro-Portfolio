  const toggleModal = () => document.body.classList.toggle("modal--open");

/*
function contact(event) {
  event.preventDefault();

  emailjs
    .sendForm(
      'service_30ar08o',
      'template_1exev7r',
      event.target,
      'IeX856uPJs9S3lArT'
    )
    .then(() => {
      console.log('it worked');
     });
}
*/

const loading = document.querySelector(".modal__overlay--loading");
const success = document.querySelector(".modal__overlay--success");

loading.classList += " modal__overlay--visible";

setTimeout(() => {
  loading.classList.remove("modal__overlay--visible");
  success.classList += " modal__overlay--visible"
  console.log('test');
}, 1000);

