import { Injectable } from '@angular/core';
import { Usuario } from '../Entidades/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private usuarioLogueado : Usuario = new Usuario();

  constructor() { 
    if (this.hayUsuarioLogueado()){
      this.usuarioLogueado = Usuario.toUsuario(JSON.parse(localStorage.getItem('usuarioLogueado') || '{}'));
    }
     
    
  }

  hayUsuarioLogueado() : boolean {
    if (localStorage.getItem("usuarioLogueado") != null){
      return true;
    }
    return false;
  }

  loguearUsuario(usuario : Usuario) : void {
    localStorage.setItem('usuarioLogueado', JSON.stringify(usuario));
    this.usuarioLogueado = new Usuario();
    this.usuarioLogueado = usuario;
  }

  desloguearUsuario() : void {
    localStorage.removeItem("usuarioLogueado");
  }

  obtenerUsuarioLogueado() : Usuario {
    return this.usuarioLogueado;
  }
}
