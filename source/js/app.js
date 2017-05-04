(function() {
  'use strict';

  setTimeout(function() {
    document.querySelector('.greating_picture').classList.add('m--show');
  }, 1000);

})();

// добавляем класс active элементу при загрузке документа
$(window).on('load', function () {
  $('#male').addClass('active');
  $('#male_cardio').addClass('active');
  $('.male').addClass('active');
  $('.male_cardio').css({'display':'block'});

  var json = $('.c-programms__programms');

  for (var i = 0; i < json.length; i++) {
     var inner = json[i].innerText;
     
     console.log(inner);
  }

  console.log(json);
})

//fixed sidebar
var pWidth = $(".c-categories__menu").parent().innerWidth();


 $('.c-categories__menu').css({'width' : pWidth});

 $(window).resize(function(){
     pWidth = $(".c-categories__menu").parent().innerWidth();
     $('.c-categories__menu').css({'width' : pWidth});
 });
$(window).scroll(function() {
    var scrollVal = window.scrollY;
    if (scrollVal >= 1){
      $('nav').css({'background': '#232323'});
    }
    else {
      $('nav').css({'background': 'transparent'});
    }
    if (scrollVal >= 380){
      $('.c-categories__menu').css({'position':'fixed','margin-top':'-380px'});
    }else {
      $('.c-categories__menu').css({'position':'absolute','margin-top':0});
    }
  }
);
// smooth scroll
$("#scrollSpy").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
    top = $(id).offset().top;
    top = top -70;
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 500);
});

//burger
$('.nav__burger').click(function () {
  $(this).toggleClass('change');
  $('.overlay-nav__container').toggleClass('show');
})

//flipp card
$('.c-card__container').click(function () {
    $(this).toggleClass('flipped');
});

//accordion
var acc = document.getElementsByClassName("c-products__title");
var width = document.documentElement.clientWidth;
var i;
if(width <= 463){
  for (i = 0; i < acc.length; i++) {
      acc[i].onclick = function(){
          /* Toggle between hiding and showing the active panel */
          var panel = this.nextElementSibling;
          if (panel.style.display === "block") {
              panel.style.display = "none";
          } else {
              panel.style.display = "block";
          }
      };
  };
};

// отображаем блоки с программами на мобильных
if(width <= 463){
  $('.c-programms__category-container').css({'display':'block'});
}
// SLIDER

var slideIndex = 0;
function showSlides() {
    var i;
    var slides = document.getElementsByClassName('c-slider__content');
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "flex";
    setTimeout(showSlides, 6150);
}

// переключение между категориями
$('.c-categories__item').on('click',function (e) {
  e.preventDefault();// отменяем событие по умолчанию

  var tabcontent = $('.c-programms__category-container'); // массив блоков с программами
  var tablinks = $('.c-categories__item'); // список категорий
  var id = $(this).attr('id');//передаем id данной категории
  var elem = document.getElementsByClassName(id)[0];// находим блок товаров с необходимым классом


  // скрываем блоки с товарами и подсказку
  for(i=0; i<tabcontent.length; i++){
    $(tabcontent[i]).css({'display':'none'});
  }
  // удаляем класс active у списка категорий
  for(i=0; i<tablinks.length; i++){
    $(tablinks[i]).removeClass('active');
  }

  $(this).addClass('active');// добавляем класс active элементу на который кликнули
  $(elem).css({'display':'block'}); // отображаем необходимый блок товаров
});

// переключение между программами тренировок
$('.c-programms__category-anchor').on('click', function() {
  var tabcontent = $('.c-programms__programms');
  var tablinks = $('.c-programms__category-anchor');
  var id = $(this).attr('id');
  var elem = document.getElementsByClassName(id)[0];



  // скрываем блоки с товарами
  for(i=0; i<tabcontent.length; i++){
    $(tabcontent[i]).css({'display':'none'});
  }
  // удаляем класс active у списка категорий
  for(i=0; i<tablinks.length; i++){
    $(tablinks[i]).removeClass('active');
  }

  $(this).addClass('active');// добавляем класс active элементу на который кликнули
  $(elem).css({'display':'block'}); // отображаем необходимый блок товаров


});
/*
function showSlides(n) {
  let i;
  let slides = $('.c-slider__content');
  let dots = $('.c-slider__button');

  if( n > slides.length){
    slideIndex = 1;
  }
  if( n < 1){
    slideIndex = slides.length;
  }

  for(i = 0; i < slides.length; i++){
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = 'flex';
  dots[slideIndex-1].className += " active";

}
*/
function curentSlide(n) {
  showSlides(slideIndex = n);
}
function plusSlide(n) {
  showSlides(slideIndex += n );
}
showSlides();
