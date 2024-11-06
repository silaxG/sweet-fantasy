import { Component } from '@angular/core';
import { Receta } from '../models/item';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  
  constructor(private database: FirestoreService) { }
//interfaz de receta
  data: Receta = {
    id:'',
      nombre:'',
      descripcion:'',
      porciones:0,
      instrucciones:'',
      imagen:'',
      preparacion:'',
    
  }
  //funcion para crear elemento
  crearElemento(){
    
    const receta: Receta = {
      id:'',
        nombre:'',
        descripcion:'',
        porciones:0,
        instrucciones:'',
        imagen:'',
        preparacion:'',
    }
    const path= 'receta'
    const id= this.database.getid()
    this.database.createDoc(this.data, path, id).then((res)=>{
      console.log("se ha guardado con exito")
    } )
  }
}
