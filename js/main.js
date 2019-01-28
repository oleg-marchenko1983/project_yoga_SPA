window.addEventListener("DOMContentLoaded", function () {
  'use strict'

  const tab = document.querySelectorAll('.info-header-tab');
  const infoHeader = document.querySelector('.info-header');
  const tabContent = document.querySelectorAll('.info-tabcontent');

  const hideContent = (a) => {
    for (let i = a, max = tabContent.length; i < max; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }
  hideContent(1);

  const showTabContent = (b) => {
    if (tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  }

  infoHeader.addEventListener('click', (e) => {
    let target = e.target;
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
  // timer
  const deadline = "2019-01-31";

  const getTimeRemaining = (endtime) => {
    let t = Date.parse(endtime) - Date.parse(new Date()),
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor((t / (1000 * 60 * 60)))
    // hours = Math.floor((t / 1000 / 60 / 60) % 24),
    // days = Math.floor((t / (1000 * 60 * 60 * 24)));

    return {
      'total': t,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };

  }

  const setClock = (id, endtime) => {
    let timer = document.getElementById(id),
      hours = timer.querySelector('.hours'),
      minutes = timer.querySelector('.minutes'),
      seconds = timer.querySelector('.seconds'),
      timeInterval = setInterval(updateClock, 1000);

    const addZero = (n) => {
      if (n < 10) {
        return "0" + n;
      } else {
        return n;
      }
    };

    function updateClock() {
      let t = getTimeRemaining(endtime);
      hours.textContent = addZero(t.hours);
      minutes.textContent = addZero(t.minutes);
      seconds.textContent = addZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
        hours.textContent = '00';
        minutes.textContent = '00';
        seconds.textContent = '00';
      };
    };
  };
  setClock('timer', deadline);

  //Module
  console.log(tabContent);
  let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    popupClose = document.querySelector('.popup-close');


  more.addEventListener('click', () => {
    overlay.style.display = 'block';
    more.classList.add('more-splash');
    document.body.style.overflow = 'hidden';
  });
  popupClose.addEventListener('click', () => {
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    document.body.style.overflow = '';
  });
  // Form

  //   let message = {
  //     loading: 'Загрузка...',
  //     success: 'Спасибо! Скоро мы с вами свяжемся!',
  //     failure: 'Что-то пошло не так...'
  // };

  // let form = document.getElementsByClassName('main-form')[0],
  //     formBottom = document.getElementById('form'),
  //     input = document.getElementsByTagName('input'),
  //     statusMessage = document.createElement('div');
  //     statusMessage.classList.add('status');

  // function sendForm(elem) {
  //     elem.addEventListener('submit', function(e) {
  //         e.preventDefault();
  //         elem.appendChild(statusMessage);
  //         let formData = new FormData(elem);

  //         function postData(data) {

  //         return new Promise(function(resolve, reject) {
  //                 let request = new XMLHttpRequest();

  //                 request.open('POST', 'server.php');

  //                 request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

  //                 request.onreadystatechange = function () {
  //                     if (request.readyState < 4) {
  //                         resolve()
  //                     } else if (request.readyState === 4) {
  //                         if (request.status == 200 && request.status < 300) {
  //                             resolve()
  //                         } else {
  //                             reject()
  //                         }

  //                     }
  //                 }
  //                 request.send(data)
  //             })
  //         } // end postdata
  //         function clearInput() {
  //             for (let i = 0; i < input.lenght; i++) {
  //                 input[i].value = '';
  //             }
  //         }
  //         postData(formData)
  //             .then(() => statusMessage.innerHTML = message.loading)
  //             .then(() => {
  //                 thanksModal.style.display = 'block';
  //                 mainModal.style.display = 'none';
  //                 statusMessage.innerHTML = '';
  //             })
  //             .catch(() => statusMessage.innerHTML = message.failure)
  //             .then(clearInput)
  //     });
  //   };

  //     sendForm(form);
  //     sendForm(formBottom)

  //slider

  let slideIndex = 1,

    slides = document.querySelectorAll('.slider-item'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),
    dotsWrap = document.querySelector('.slider-dots'),
    dots = document.querySelectorAll('.dot');

  showSlides(slideIndex);

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
      slideIndex = slides.length
    }

    slides.forEach(item => item.style.display = 'none');
    // for (let i = 0; i < slides.lenght; i++) {
    // slides[i].style.display = 'none';
    dots.forEach(item => item.classList.remove('dot-active'));
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('dot-active');
  };

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlides(n) {
    showSlides(slideIndex = n);
  }

  prev.addEventListener('click', function () {
    plusSlides(-1);
  });

  next.addEventListener('click', function () {
    plusSlides(1);
  });

  dotsWrap.addEventListener('click', function (event) {
    for (let i = 0; i < dots.length + 1; i++) {
      if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
        currentSlides(i);
      }
    }
  })

  //calc
 // Calc

 let persons = document.querySelectorAll('.counter-block-input')[0],
 restDays = document.querySelectorAll('.counter-block-input')[1],
 place = document.getElementById('select'),
 totalValue = document.getElementById('total'),
 personsSum = 0,
 daysSum = 0,
 total = 0;

totalValue.innerHTML = 0;

persons.addEventListener('change', function() {
 personsSum = +this.value;
 total = (daysSum + personsSum)*4000;

 if(restDays.value == '') {
     totalValue.innerHTML = 0;
 } else {
     totalValue.innerHTML = total;
 }
});

restDays.addEventListener('change', function() {
 daysSum = +this.value;
 total = (daysSum + personsSum)*4000;

 if(persons.value == '') {
     totalValue.innerHTML = 0;
 } else {
     totalValue.innerHTML = total;
 }
});

place.addEventListener('change', function() {
 if (restDays.value == '' || persons.value == '') {
     totalValue.innerHTML = 0;
 } else {
     let a = total;
     totalValue.innerHTML = a * this.options[this.selectedIndex].value;
 }
});

});
  
});