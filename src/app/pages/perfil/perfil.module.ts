import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilRoutingModule } from './perfil-routing.module';

import { PerfilComponent } from './perfil.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilRoutingModule
  ],
  declarations: [PerfilComponent]
})
export class PerfilModule {}
