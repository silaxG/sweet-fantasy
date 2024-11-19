import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirestoreService } from '../services/firestore.service';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  hide = true;

  // IMPORTACIÓN DEL MODELO / INTERFAZ
  usuarios: Usuario = {
    uid: '',
    nombre: '',
    apellido: '',
    email: '',
    rol: 'usuario', // => designamos un rol por defecto para los usuarios que se registren 
    password: ''
  }

  // CREAR UNA COLECCIÓN QUE SOLO RECIBE OBJETOS DEL TIPO USUARIOS
  coleccionUsuarios: Usuario[] = [];

  // Referenciamos a nuestros servicios
  constructor(
    public servicioFirestore: FirestoreService, // vincula UID con la colección
    public servicioRutas: Router // método de navegación
  ){}

 

  ngOnInit() {
  }

}
