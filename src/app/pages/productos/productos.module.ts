import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductosPageRoutingModule } from './productos-routing.module';

import { ProductosPage } from './productos.page';
import { PipesModule } from 'src/pipes/pipes.module';
import { RestaurantesPipe } from 'src/pipes/restaurantes.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductosPageRoutingModule,
    PipesModule
  ],
  declarations: [ProductosPage, RestaurantesPipe]
})
export class ProductosPageModule {}
