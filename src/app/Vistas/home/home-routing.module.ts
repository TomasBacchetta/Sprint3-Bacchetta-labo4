import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AhorcadoComponent } from '../juegos/ahorcado/ahorcado.component';
import { MayorOMenorComponent } from '../juegos/mayor-o-menor/mayor-o-menor.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'mayorMenor', component: MayorOMenorComponent },
  { path: 'ahorcado', component: AhorcadoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
