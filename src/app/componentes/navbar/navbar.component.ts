import { Component,ElementRef,HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from 'src/app/paginas/inicio/inicio.component';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isScrollingDown: boolean = false;
  lastScrollTop: number = 0;

  claseActiva: string = "inicio";

  constructor(private iniComp: InicioComponent){ }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    this.isScrollingDown = scrollTop > this.lastScrollTop;
    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Reiniciar la posición si se llega al tope de la página
    if(this.lastScrollTop > 0 && !this.isScrollingDown){
      this.isScrollingDown = true;
    }
  }
  
  scrollToElement(destino: string): void {
    this.claseActiva = destino;
    this.iniComp.scrollToElement(destino);
  }
}
