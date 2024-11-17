import { Component, ViewChild } from '@angular/core';
import { Receta } from '../models/item';
import { FirestoreService } from '../services/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  receta: Receta[] = [];
  isModalOpen = false;
  selectedReceta: Receta | null = null;

  constructor(
    private database: FirestoreService,
    private servicioRutas: Router
  ) {}

  ngOnInit() {
    this.obtenerresultado();
  }

  obtenerresultado() {
    this.database.getColection<Receta>('receta').subscribe(res => {
      console.log("informacion devuelta ", res);
      this.receta = res;
    });
  }

  openModal(item: Receta) {
    this.selectedReceta = item; // Guardar la receta seleccionada
    this.isModalOpen = true; // Abrir el modal
  }

  closeModal() {
    this.isModalOpen = false; // Cerrar el modal
    this.selectedReceta = null; // Limpiar la receta seleccionada
  }
}
