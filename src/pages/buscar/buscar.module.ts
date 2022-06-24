import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BuscarComponent } from './buscar.component';

import { BuscarRoutingModule } from './buscar-routing.module';
import { PipesModule } from 'src/pipes/pipes.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    BuscarRoutingModule,
    PipesModule
  ],
  declarations: [BuscarComponent]
})
export class BuscarModule {}
