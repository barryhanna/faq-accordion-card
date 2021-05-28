const buttons = document.querySelectorAll('.faq-title');

function toggle(e) {
  e.target.closest('.faq').classList.toggle('active');
}

buttons.forEach((btn) => {
  btn.addEventListener('click', toggle);
});

function changeImage() {
  const image = document.querySelector('.img-container img');
  const htmlEl = document.querySelector('html');
  if (htmlEl.clientWidth >= 800) {
    image.src = './images/illustration-woman-online-desktop.svg';
    image.setAttribute('background-image', './images/bg-pattern-desktop.svg');
  } else {
    image.src = './images/illustration-woman-online-mobile.svg';
    image.setAttribute('background-image', './images/bg-pattern-mobile.svg');
  }
}

window.onresize = changeImage;
document.addEventListener('DOMContentLoaded', changeImage);
