import { Component } from '@angular/core';
import { Receta } from '../models/item';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private database: FirestoreService) {
  }
  receta: Receta[]= []

  ngOnInit(){
    this.obtenerresultado()
    
  }

  obtenerresultado(){
    this.database.getColection<Receta>('receta').subscribe(res =>{console.log("informacion devuelta ",res)

      this.receta= res;
    })
  }

}
