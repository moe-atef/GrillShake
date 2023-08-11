import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(@Inject(DOCUMENT) private document: Document) {}

  navbarOpen(){
    this.document?.querySelector(".offcanvas-collapse")?.classList.toggle("open");
  }

  toggleDropdown(e: Event): void {
    const _d = (e.target as HTMLElement).closest(".dropdown");
    const _m = document.querySelector(".dropdown-menu") as HTMLElement;

    setTimeout(() => {
      const shouldOpen = _d?.matches(":hover");
      _m?.classList.toggle("show", shouldOpen);
      _d?.classList.toggle("show", shouldOpen);

      _d?.setAttribute("aria-expanded", shouldOpen?.toString() || 'false');
    }, e.type === "mouseleave" ? 300 : 0);
  }
}
