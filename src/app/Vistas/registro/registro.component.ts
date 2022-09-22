import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { take } from 'rxjs';
import { Usuario } from 'src/app/Entidades/usuario';
import { FirebaseDataUsuariosService } from 'src/app/Services/firebase-data.service';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  usuario : Usuario = new Usuario();
  claveConfirmada : string = "";
  nombreInvalido : boolean = false;
  correoInvalido : boolean = false;
  claveInvalida : boolean = false;
  claveNoConcuerda : boolean = false;
  
  alerta : boolean = false;
  existeUsuario : boolean = false;

  spinner : boolean = false;

  constructor(
    private loginService : LoginService,
    private firebase : FirebaseDataUsuariosService
    ) { }

  ngOnInit(): void {
  }

  cerrarAlerta() : void {
    this.alerta = false;
  }

  registrar() : void {
    let okRegistro = true;
    this.claveNoConcuerda = false;
    this.nombreInvalido = false;
    this.correoInvalido = false;
    this.claveInvalida = false;
    this.existeUsuario = false;
    

    if (this.usuario.clave != this.claveConfirmada){
      okRegistro = false;
      this.claveNoConcuerda = true;

    }

    if (!this.usuario.validarNombre()){
      okRegistro = false;
      this.nombreInvalido = true;
      

    } 

    if (!this.usuario.validarCorreo()){
      okRegistro = false;
      this.correoInvalido = true;

    }

    if (!this.usuario.validarClave()){
      okRegistro = false;
      this.claveInvalida = true;

    }

   
    let listaUsuarios : Usuario[] = [];
    this.spinner = true;
    this.firebase.obtenerTodos().snapshotChanges().pipe(take(1)).subscribe(doc => {
      listaUsuarios = [];
      doc.forEach((element: any) => {
        listaUsuarios.push(Usuario.toUsuario(element.payload.doc.data()));
      });
  

      if (!this.usuario.existeCorreo(listaUsuarios)){
        okRegistro = false;
        this.existeUsuario = true;
        this.firebase.crear(this.usuario);
        this.alerta = true;
        this.loginService.loguearUsuario(this.usuario);        
      }
      this.spinner = false;
    });
    
    
  }

}
