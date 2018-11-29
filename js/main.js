window.addEventListener("DOMContentLoaded", function () {
  'use strict'

  const tab = document.querySelectorAll('.info-header-tab');
  const infoHeader = document.querySelector('.info-header');
  const tabContent = document.querySelectorAll('.info-tabcontent');

  function hideContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }
  hideContent(1);

  function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  }

  infoHeader.addEventListener('click', function (event) {
    let target = event.target;
    if (target && target.classList.contains('info-header-tab')) {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  })
});