const buttons = document.querySelectorAll('.faq-title');

function toggle(e) {
  e.target.closest('.faq').classList.toggle('active');
}

buttons.forEach((btn) => {
  btn.addEventListener('click', toggle);
});

// function changeImage() {
//   const image = document.querySelector('.bg-container');
//   const htmlEl = document.querySelector('html');
//   if (htmlEl.clientWidth >= 800) {
//     image.src = './images/illustration-woman-online-desktop.svg';
//     image.setAttribute('background-image', './images/bg-pattern-desktop.svg');
//     image.classList.add('box-img');
//   } else {
//     image.setAttribute('background-image', './images/bg-pattern-mobile.svg');
//     image.classList.remove('box-img');
//   }
// }

// window.onresize = changeImage;
// document.addEventListener('DOMContentLoaded', changeImage);
