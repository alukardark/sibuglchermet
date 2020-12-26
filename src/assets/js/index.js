// import '../styles/styles.css'
import '../styles/main.scss'

window.$ = window.jQuery = require('jquery');

import Inputmask from "inputmask";
import Swiper from 'swiper';
require("@fancyapps/fancybox");

import './sidebarSticky.js';
import './filesToUpload.js';




let inputsTel = document.querySelectorAll('input[type="tel"]');
inputsTel.forEach(el => {
    Inputmask({"mask": "+7 (999) 999-9999"}).mask(el);
});




// setTimeout(function(){
    // document.body.classList.add('active');
// }, 100);



var mainBanner = new Swiper('.main-slider .swiper-container', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 15,
    speed: 600,
    // autoHeight: true,
    // autoplay: {
    //     delay: 3000
    // },
    // navigation: {
    //     nextEl: '.certificates-slider__slider .certificates-slider__slider-next',
    //     prevEl: '.certificates-slider__slider .certificates-slider__slider-prev',
    // },
    // pagination: {
    //     el: '.main__slider .swiper-pagination',
    //     type: 'bullets',
    //     clickable: true,
    // },
    // breakpoints: {
    //     1199: {
    //         spaceBetween: 24,
    //         slidesPerView: 4,
    //     },
    //     989: {
    //         spaceBetween: 24,
    //         slidesPerView: 3,
    //     },
    //     767: {
    //         spaceBetween: 24,
    //         slidesPerView: 2,
    //     },
    //     575: {
    //         spaceBetween: 24,
    //         slidesPerView: 1,
    //     }
    // },
});


$('.footer__up').click(function () {
    $("html, body").stop().animate({scrollTop: 0}, 800);
});





$('.header__menu-dropdown').hover(function(){
   $(this).find('ul').stop().slideToggle(200);
});











