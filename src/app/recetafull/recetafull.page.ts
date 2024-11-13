import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Receta } from '../models/item';
import { FirestoreService } from '../services/firestore.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recetafull',
  templateUrl: './recetafull.page.html',
  styleUrls: ['./recetafull.page.scss'],
})
export class RecetafullPage implements OnInit {

  receta: Receta | undefined;

  constructor(private route: ActivatedRoute,
              private database: FirestoreService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.database.getDoc<Receta>('receta', id).subscribe(data => {
        this.receta = data;
      });
    }
  }

}
