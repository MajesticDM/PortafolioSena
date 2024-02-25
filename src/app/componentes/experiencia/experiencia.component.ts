import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experiencia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {
elementoSeleccionado: any;
claseActiva: number = 1;

   mostrarContenido(opcion: number) {
  // Ocultar todos los elementos
  var elementos = document.querySelectorAll('.contenido .opcion');
  elementos.forEach(function(elemento) {
    elemento.classList.remove('mostrar');
    elemento.classList.add('ocultar'); // Agregar clase para animar el margen
  });
  
  this.claseActiva = opcion;
  // Mostrar solo el elemento seleccionado
  this.elementoSeleccionado = document.getElementById('opcion' + opcion);
  this.elementoSeleccionado.classList.add('mostrar');
  this.elementoSeleccionado.classList.remove('ocultar'); // Quitar clase después de la transición
}
}
