import { Component, OnInit } from '@angular/core';
import { Receta } from '../models/item';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-creareceta',
  templateUrl: './creareceta.page.html',
  styleUrls: ['./creareceta.page.scss'],
})
export class CrearecetaPage {

  constructor(private database: FirestoreService) { }
  ngOnInit() {
    console.log("se ha ingresado a admin")
  }
  crearElemento(){
    const receta: Receta = {
      infocompleta:{
        id:'',
        nombre:'',
        descripcion:'',
        porciones:0,
        instrucciones:'',
        imagen:'',
        preparacion:'',
    }
    }
    const path= 'Receta'
    this.database.createDoc(receta, path, "ritagorda").then((res)=>{
      console.log("se ha guardado con exito")
    } )
  }
}
