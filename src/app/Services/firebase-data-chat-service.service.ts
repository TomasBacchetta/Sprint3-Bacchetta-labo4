import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Mensaje } from '../Entidades/mensaje';

@Injectable({
  providedIn: 'root'
})
export class FirebaseDataChatServiceService {

  private dbPath = 'chat';

  usuariosRef : AngularFirestoreCollection<Mensaje>;

  constructor(private db : AngularFirestore){
    this.usuariosRef = db.collection(this.dbPath);
  }

  obtenerTodos(): AngularFirestoreCollection<Mensaje>{
    return this.usuariosRef;
  }

  crear(mensaje: Mensaje) : any {
    return this.usuariosRef.add(mensaje);
  }
}
