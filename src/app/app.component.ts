import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

declare var AOS:any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'grill-shake';

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    let myButton = document.getElementById("myBtn");
    fromEvent(window, 'scroll')
      .pipe(throttleTime(20))
      .subscribe(() => {
        const intViewportWidth = this.document?.defaultView?.innerWidth;
        const navbar = this.document.getElementById("navbar");
        if (
          (this.document?.body?.scrollTop > 30 || this.document?.documentElement?.scrollTop > 30) &&
          intViewportWidth && intViewportWidth > 991
        ) {
          if (navbar) {
            navbar.classList.add("top-nav-collapse");
            if(myButton) myButton.style.display = "block";
          }
        } else if (
          (this.document?.body?.scrollTop < 30 || this.document?.documentElement?.scrollTop < 30) &&
          intViewportWidth && intViewportWidth > 991
        ) {
          
          if(myButton) myButton.style.display = "none";
          if (navbar) {
            navbar.classList.remove("top-nav-collapse");
          }
        }
      });

      AOS.init({
        duration: 1000,
        easing: "ease",
         // whether animation should happen only once - while scrolling down
    });
  }
}
