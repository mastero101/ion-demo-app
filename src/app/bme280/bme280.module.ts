import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bme280PageRoutingModule } from './bme280-routing.module';

import { Bme280Page } from './bme280.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bme280PageRoutingModule
  ],
  declarations: [Bme280Page]
})
export class Bme280PageModule {}
