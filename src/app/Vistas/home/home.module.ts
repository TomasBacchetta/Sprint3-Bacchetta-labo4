import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MayorOMenorComponent } from '../juegos/mayor-o-menor/mayor-o-menor.component';
import { AhorcadoComponent } from '../juegos/ahorcado/ahorcado.component';


@NgModule({
  declarations: [
    HomeComponent,
    MayorOMenorComponent ,
    AhorcadoComponent
 ],
  imports: [
    CommonModule,
    HomeRoutingModule  ]
})
export class HomeModule { }
