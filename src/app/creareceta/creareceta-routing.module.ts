import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearecetaPage } from './creareceta.page';

const routes: Routes = [
  {
    path: '',
    component: CrearecetaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearecetaPageRoutingModule {}
