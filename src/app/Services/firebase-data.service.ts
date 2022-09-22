import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { Usuario } from '../Entidades/usuario';


@Injectable({
  providedIn: 'root'
})
export class FirebaseDataUsuariosService {

  private dbPath = 'usuarios';

  usuariosRef : AngularFirestoreCollection<Usuario>;

  constructor(private db : AngularFirestore){
    this.usuariosRef = db.collection(this.dbPath);
  }

  obtenerTodos(): AngularFirestoreCollection<Usuario>{
    return this.usuariosRef;
  }

  crear(usuario: Usuario) : any {
    return this.usuariosRef.add(Object.assign({}, usuario));
  }

  
}
