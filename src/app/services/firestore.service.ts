import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Receta } from '../models/item';
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) {}
  //crear coleccion
  createDoc(data:any, path: string, id:string){
    const collection = this.firestore.collection(path);

    return collection.doc(id).set(data)
    
  }
//crear id
  getid(){ 
    return this.firestore.createId()
  }
  //obtener colecciones
  getColection<tipo>(path: string){

    const collection= this.firestore.collection<Receta>(path);
    return collection.valueChanges()

  }

}
