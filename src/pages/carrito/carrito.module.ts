import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarritoRoutingModule } from './carrito-routing.module';

import { CarritoComponent } from './carrito.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarritoRoutingModule
  ],
  declarations: [CarritoComponent]
})
export class CarritoModule {}
