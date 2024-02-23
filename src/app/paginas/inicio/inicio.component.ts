import { Component,ElementRef } from '@angular/core';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  isScrollingDown: boolean = false;
  lastScrollTop: number = 0;

  claseActiva: string = "inicio";

  constructor(private elementRef: ElementRef){ }

  scrollToElement(destino: string): void {
    const element = this.elementRef.nativeElement.querySelector('#' + destino);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

}
