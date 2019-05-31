'use strict';

function selectMenuItem(element) {
  const a = document.querySelectorAll('a');
  for (let i = 0; i < a.length; i++) {
    a[i].classList.remove('is-active');
  }
  element.classList.add('is-active');
}
