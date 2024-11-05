import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearecetaPageRoutingModule } from './creareceta-routing.module';

import { CrearecetaPage } from './creareceta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearecetaPageRoutingModule
  ],
  declarations: [CrearecetaPage]
})
export class CrearecetaPageModule {}
