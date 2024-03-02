import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {

  abrirGithub(proyecto: string){
    window.open("https://github.com/MajesticDM/"+proyecto,"_blanc")
  }
}
