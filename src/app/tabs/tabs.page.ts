import { Component } from '@angular/core';
import { Receta } from '../models/item';
import { FirestoreService } from '../services/firestore.service';
 

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

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
