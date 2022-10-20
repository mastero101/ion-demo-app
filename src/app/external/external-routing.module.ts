import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExternalPage } from './external.page';

const routes: Routes = [
  {
    path: '',
    component: ExternalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExternalPageRoutingModule {}
