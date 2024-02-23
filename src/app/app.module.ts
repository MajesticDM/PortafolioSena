import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NotFoundComponent } from './paginas/not-found/not-found.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { InformacionComponent } from './componentes/informacion/informacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { InicioComponent as InicioComponentStandAlone } from './componentes/inicio/inicio.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';

@NgModule({
    declarations: [AppComponent, InicioComponent, NotFoundComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterLinkActive,
        RouterLink,
        RouterOutlet,
        CommonModule,
        NavbarComponent,
        InformacionComponent,
        ExperienciaComponent,
        InicioComponentStandAlone,
        ProyectosComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
