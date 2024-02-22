import { Component,ElementRef,HostListener } from '@angular/core';

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

  @HostListener('window:scroll', [])
  onWindowScroll() {
    debugger
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    this.isScrollingDown = scrollTop > this.lastScrollTop;
    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Reiniciar la posición si se llega al tope de la página
    if(this.lastScrollTop > 0 && !this.isScrollingDown){
      this.isScrollingDown = true;
    }
  }
  
  scrollToElement(destino: string): void {
    const element = this.elementRef.nativeElement.querySelector('#' + destino);
    this.claseActiva = destino;

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }

}
