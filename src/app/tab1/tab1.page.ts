import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { Receta } from '../models/item';
import { FirestoreService } from '../services/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  @ViewChild(IonModal) modal!: IonModal;

  message = 'si quito esta linea y la de abajo el codigo deja de andar ayuda.';
  name: string = '';
  
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }
  constructor(private database: FirestoreService,
    private servicioRutas: Router
  ) {
  }
  receta: Receta[] = []

  ngOnInit() {
    this.obtenerresultado()

  }

  obtenerresultado() {
    this.database.getColection<Receta>('receta').subscribe(res => {
      console.log("informacion devuelta ", res)

      this.receta = res;
    })
  }
  verDetalle(id: string) {

  }
}


