//LAS RUTAS INDICAN QUE TIENE QUE MOSTRAR EL SITIO CUANDO UN USUARIO CLICKEA UN LINK O PEGA UN URL
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; //PARA QUE LA APP TENGA ROUTING
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent } //CUANDO PONES /heroes AL LADO DEL URL MOSTRARÁ HeroesComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //CON forRoot SE CONFIGURA AL NIVEL DE root. SE ENCARGA DE LA NAVEGACIÓN INICIAL, SIN ROUTING
  exports: [RouterModule] //PARA QUE ESTÉ DISPOIBLE EN TODA LA APP
})
export class AppRoutingModule { }