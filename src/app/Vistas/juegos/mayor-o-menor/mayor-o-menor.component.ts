import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mayor-o-menor',
  templateUrl: './mayor-o-menor.component.html',
  styleUrls: ['./mayor-o-menor.component.scss']
})
export class MayorOMenorComponent implements OnInit {

  cartas : string[] = [
    "1-pica.png",
    "2-pica.png",
    "3-pica.png",
    "4-pica.png",
    "5-pica.png",
    "6-pica.png",
    "7-pica.png",
    "8-pica.png",
    "9-pica.png",
    "10-pica.png",
    "11-pica.png",
    "12-pica.png",
    "13-pica.png",
    ///////
    "1-trebol.png",
    "2-trebol.png",
    "3-trebol.png",
    "4-trebol.png",
    "5-trebol.png",
    "6-trebol.png",
    "7-trebol.png",
    "8-trebol.png",
    "9-trebol.png",
    "10-trebol.png",
    "11-trebol.png",
    "12-trebol.png",
    "13-trebol.png",
    ///////
    "1-diamante.png",
    "2-diamante.png",
    "3-diamante.png",
    "5-diamante.png",
    "6-diamante.png",
    "7-diamante.png",
    "8-diamante.png",
    "9-diamante.png",
    "10-diamante.png",
    "11-diamante.png",
    "12-diamante.png",
    "13-diamante.png",
    ///////
    "1-corazon.png",
    "2-corazon.png",
    "3-corazon.png",
    "5-corazon.png",
    "6-corazon.png",
    "7-corazon.png",
    "8-corazon.png",
    "9-corazon.png",
    "10-corazon.png",
    "11-corazon.png",
    "12-corazon.png",
    "13-corazon.png"
  ];


  cartaTomada : string = "";
  path : string = "../../../../assets/juegos/mayorMenor/cartas/";
  pathFinal : string = "";
  apuestaOn : boolean = false;

  valorCartaAnterior : number = 0;
  puntaje : number = 0;


  constructor() { }

  ngOnInit(): void {
    this.tomarCarta("inicio");
  }

  generarNumeroAleatorio(min : number, max : number) : number{
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  tomarCarta(condicion : string) {
    if (this.cartas.length > 0){
      //let numRandom = Math.floor(Math.random() * ((this.cartas.length-1) - 0 + 1)) + 0;
      let numRandom = this.generarNumeroAleatorio(0, this.cartas.length-1);
      this.cartaTomada = this.cartas[numRandom];
      this.cartas.splice(numRandom, 1);
    
      this.pathFinal = this.path + this.cartaTomada;
      let valorCarta = Number(this.cartaTomada.split('-')[0]);
      

      switch(condicion){
        case "mayor":
          if (valorCarta > this.valorCartaAnterior){
            this.puntaje++;
          } else {
            if (this.puntaje > 0){
              this.puntaje--;
            }
          }
          break;
        case "menor":
          if (valorCarta < this.valorCartaAnterior){
            this.puntaje++;
          } else {
            if (this.puntaje > 0){
              this.puntaje--;
            }
          }
          break;
      }
      this.valorCartaAnterior = valorCarta;
    }

    
    
  }

  refresh(){
    window.location.reload();
  }



}
