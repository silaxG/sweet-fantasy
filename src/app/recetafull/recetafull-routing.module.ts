import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecetafullPage } from './recetafull.page';

const routes: Routes = [
  {
    path: '',
    component: RecetafullPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecetafullPageRoutingModule {}
