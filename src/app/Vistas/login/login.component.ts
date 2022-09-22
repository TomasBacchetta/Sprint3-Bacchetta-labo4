import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Usuario } from 'src/app/Entidades/usuario';
import { FirebaseDataUsuariosService } from 'src/app/Services/firebase-data.service';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  errorCorreo : boolean = false;
  errorClave : boolean = false;

  usuario : Usuario = new Usuario();
  listaUsuarios : Usuario[] = [];

  spinnerOn : boolean = false;
  


  constructor(
    private fireService : FirebaseDataUsuariosService,
    private router : Router,
    private loginService : LoginService
    ) { }

  ngOnInit(): void {
    
  }

  loguearse() : void {
    this.errorCorreo = false;
    this.errorClave = false;
    this.spinnerOn = true;
    

    this.fireService.obtenerTodos().snapshotChanges().pipe(take(1)).subscribe(doc => {
      this.spinnerOn = false;
      this.listaUsuarios = [];
      doc?.forEach((element: any) => {
        this.listaUsuarios.push(Usuario.toUsuario(element.payload.doc.data()));
      });
      if (this.usuario.existeCorreo(this.listaUsuarios)){
        if (this.usuario.correspondeClave(this.listaUsuarios)){
          this.router.navigateByUrl('home');
          this.loginService.loguearUsuario(this.usuario);
        } else {
          this.errorClave = true;
        }
      } else {
        this.errorCorreo = true;
      }
    });
     
  }

}
