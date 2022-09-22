import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.scss']
})



export class AhorcadoComponent implements OnInit {
  
  letras : string[] = ["a","b","c","d","e","f","g","h","i",
                      "j","k","l","m","n","ñ","o","p","q",
                      "r","s","t","u","v","w","x","y","z"];

                      
   palabras : {palabra : string, descripcion : string}[] = [
    {"palabra" : "ornitorrinco", "descripcion" : "Un mamífero que pone huevos"},
    {"palabra" :"serrucho", "descripcion" : "Una herramienta para cortar"},
    {"palabra" :"plancha", "descripcion" :"Con ella alisará la ropa"},
    {"palabra" :"chocolate", "descripcion" :"Es un dulce muy rico"},
    {"palabra" :"martillo", "descripcion" :"Una herramienta y un tiburón"},
    {"palabra" :"pionono", "descripcion" :"Para enrollar en las fiestas"},
    {"palabra" :"hamburguesa", "descripcion" :"Con fritas y gaseosa"},
    {"palabra" :"zapato", "descripcion" :"Va en el pie"},
    {"palabra" :"computadora", "descripcion" :"No se puede vivir sin ella"},
    {"palabra" :"albañil", "descripcion" :"El que construyó tu casa"},
    {"palabra" :"piramide", "descripcion" :"El legado de los Egipcios"},
    {"palabra" :"hipopotamo", "descripcion" :"Un animal gordo y feroz"},
    {"palabra" :"dinosaurio", "descripcion" :"Reinó en la Tierra hace mucho tiempo"},
    {"palabra" :"motocicleta", "descripcion" :"Una alternativa al automóvil"},
    {"palabra" :"castillo", "descripcion" :"Donde viven los señores"},
    {"palabra" :"caballero", "descripcion" :"El que juró ante su rey"},
    {"palabra" :"astronauta", "descripcion" :"El que viaja en un cohete"},
    {"palabra" :"monstruo", "descripcion" :"El que vive debajo de la cama"},
    {"palabra" :"microfono", "descripcion" :"Con eso se graba la voz"},
    {"palabra" :"autopista", "descripcion" :"Una rodea a la Ciudad de Bs. As."},
    {"palabra" :"lapicera", "descripcion" :"Con ella se puede escribir"},
    {"palabra" :"crucero", "descripcion" :"Con uno se viaja por el mar"}
    
  ];                 
  
  
 

  palabraReal : string = "";
  descripcion : string = "";

  letrasPalabraReal: string[] = [];
  palabraEnDisplay : string[] = [];

  
  estadoBotones = new Map<string, boolean>();
 

  contador : number = 0;

  alertaVictoria : boolean = false;
  alertaDerrota : boolean = false;


  constructor() { }


  ngOnInit(): void {
    let indexRandom = this.generarNumeroAleatorio(0,this.palabras.length-1);
    this.palabraReal = this.palabras[indexRandom].palabra;
    this.descripcion = this.palabras[indexRandom].descripcion;
    this.letrasPalabraReal = this.palabraReal.split("");
    this.inicializarPalabraEnDisplay();
    this.inicializarEstadoBotones();
    
    
  }

  asignarLetra(letra : string) {
    console.log(this.contador);
    
    if (!this.encontrarLetra(letra)){//si no la pudo asignar porque no esta en la palabra
      this.contador++;
      if (this.contador > 6){
        this.alertaDerrota = true;
      }
       
    }
    if (this.palabraCompleta()){
      this.alertaVictoria = true;
    }
  }

  encontrarLetra(letra : string) : boolean{
    let seEncontroLetra = false;
    this.estadoBotones.set(letra, false);
    console.log(this.estadoBotones);
    for (let x = 0; x < this.letrasPalabraReal.length; x++){
      if (this.letrasPalabraReal[x] == letra){
        this.palabraEnDisplay[x] = letra;
        seEncontroLetra = true;
      }
    }
    return seEncontroLetra;
  }

  inicializarEstadoBotones(){
    for (let x = 0; x < this.letras.length; x++){
      this.estadoBotones.set(this.letras[x], true);
    }
  }

  generarNumeroAleatorio(min : number, max : number) : number{
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  

  

  inicializarPalabraEnDisplay() : void{
    for (let x = 0; x < this.letrasPalabraReal.length; x++){
      this.palabraEnDisplay.push("_");
    }
  }

  palabraCompleta() : boolean {
    let retorno = true;
    this.palabraEnDisplay.forEach(element => {
      if (element == "_"){
        retorno = false;
      }      
    });
    return retorno;
  }


  refresh(){
    window.location.reload();
  }


}
