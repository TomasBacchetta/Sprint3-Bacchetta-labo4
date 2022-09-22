import { Component, Input, OnInit } from '@angular/core';
import { Mensaje } from 'src/app/Entidades/mensaje';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.scss']
})
export class MensajeComponent implements OnInit {
  @Input() mensaje : Mensaje = new Mensaje();
  esUsuarioLogueado : boolean = false;
  url : string = "";
  constructor(
    private loginService : LoginService) { }
  
  ngOnInit(): void {
  if (this.mensaje.usuario == this.loginService.obtenerUsuarioLogueado().correo){
      this.esUsuarioLogueado = true;
    }
  }


  fechaUnixToDate(fechaUnix : string) : string{
    let fecha : string[] = new Date(Number(fechaUnix) *1000).toString().split(" ");
    return fecha[1] + "-" + fecha[2] + "-" +  fecha[4];
  }

}
