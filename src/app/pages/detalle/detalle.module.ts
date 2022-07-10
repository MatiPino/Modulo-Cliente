import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DetalleComponent } from './detalle.component';
import { DetalleRoutingModule } from './detalle-routing.module';


@NgModule({
  declarations: [DetalleComponent],
  imports: [
    CommonModule,
    IonicModule,
    DetalleRoutingModule
  ]
})
export class DetalleModule { }
