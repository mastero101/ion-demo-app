import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bme280Page } from './bme280.page';

const routes: Routes = [
  {
    path: '',
    component: Bme280Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bme280PageRoutingModule {}
