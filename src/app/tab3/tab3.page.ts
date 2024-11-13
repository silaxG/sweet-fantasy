import { Component } from '@angular/core';
import { Receta } from '../models/item';
import { FirestoreService } from '../services/firestore.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  
  imagenCargada: boolean = false; // Nueva variable para rastrear el estado de la imagen cargada

  constructor(private database: FirestoreService) { }

  // Interfaz de receta
  data: Receta = {
    id: '',
    nombre: '',
    descripcion: '',
    porciones: 0,
    instrucciones: '',
    imagen: '',
    preparacion: '',
    categoria:'',
  }

  // Función para crear elemento
  crearElemento() {
    const receta: Receta = { ...this.data };
    const path = 'receta';
    const id = this.database.getid();
    
    this.database.createDoc(receta, path, id)
    .then((res) => {
      console.log("Se ha guardado con éxito");
      alert("se ha añadido la receta con exito")
    })
    .catch((error) => {
      console.error("Error al guardar:", error);
      alert("algo ha salido mal \n"+ error)
    });
  }  

  // Evento que convierte la imagen en código legible
  procesarImagen(event: any) {
    const archivo = event.target.files[0]; // Obtenemos el archivo seleccionado
    if (archivo) {
      const lector = new FileReader();

      // Este evento se activa cuando la lectura de la imagen ha terminado
      lector.onload = (e: any) => {
        const base64Imagen = e.target.result; // Convertimos la imagen a base64

        // Asignamos la imagen a la propiedad 'imagen' en 'data'
        this.data.imagen = base64Imagen;
        this.imagenCargada = true; // Cambiamos el estado a verdadero al cargar la imagen
      };

      lector.readAsDataURL(archivo); // Leemos la imagen como base64
    }
  }
}
