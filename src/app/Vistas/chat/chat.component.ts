import { Component, OnInit } from '@angular/core';
import { Mensaje } from 'src/app/Entidades/mensaje';
import { FirebaseDataChatServiceService } from 'src/app/Services/firebase-data-chat-service.service';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  public mensajes : Mensaje[] = [];
  spinner : boolean = false;

  mensajeAEnviar : string = "";

  error : boolean = false;

  constructor(
    private db : FirebaseDataChatServiceService,
    private usuarioLogueado : LoginService
    ) { }

  ngOnInit(): void {
    this.spinner = true;
    this.db.obtenerTodos().snapshotChanges().subscribe(doc => {
      this.mensajes = [];
      doc.forEach((element : any) => {
        this.mensajes.push(Mensaje.toMensaje(element.payload.doc.data()));
        this.mensajes.sort((m1, m2) => {
          if(m1.fecha > m2.fecha){
            return 1;
          }
          if (m1.fecha < m2.fecha){
            return -1;
          }
          return 0;
        });
      });
      this.spinner = false;
    });
  }

  enviarMensaje() {
    this.error = false;
    if (Mensaje.validarTextoMensaje(this.mensajeAEnviar)){
      let mensajeNuevo = new Mensaje();
      mensajeNuevo.fecha = parseInt((new Date().getTime() / 1000).toFixed(0)).toString();
      mensajeNuevo.mensaje = this.mensajeAEnviar;
      mensajeNuevo.usuario = this.usuarioLogueado.obtenerUsuarioLogueado().correo;
    
      this.db.crear(Object.assign({}, mensajeNuevo));
      this.mensajeAEnviar = "";
    } else {
      this.error = true;
    }
    
  }

  

}
