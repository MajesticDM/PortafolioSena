import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { NotFoundComponent } from './paginas/not-found/not-found.component';
//import
const routes: Routes = [
  {path: '', redirectTo: 'Inicio', pathMatch:'full'},
  {path:'Inicio', component: InicioComponent},
  { path: '**', component:  NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
