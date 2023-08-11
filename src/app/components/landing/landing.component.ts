import { Component,OnInit } from '@angular/core';

declare var Swiper:any;
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})


export class LandingComponent {


  ngOnInit(){
    var cardSlider = new Swiper(".card-slider", {
      autoplay: {
          delay: 4000,
          disableOnInteraction: false,
      },
      loop: true,
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
      slidesPerView: 3,
      spaceBetween: 70,
      breakpoints: {
          // when window is <= 767px
          767: {
          slidesPerView: 1,
          },
          // when window is <= 991px
          991: {
          slidesPerView: 2,
          spaceBetween: 40,
          },
      },
  });
  }
}
