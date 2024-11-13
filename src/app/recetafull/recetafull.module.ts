import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecetafullPageRoutingModule } from './recetafull-routing.module';

import { RecetafullPage } from './recetafull.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecetafullPageRoutingModule
  ],
  declarations: [RecetafullPage]
})
export class RecetafullPageModule {}
