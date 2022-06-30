import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SuperComponent } from './super.component';

import { SuperRoutingModule } from './super-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: SuperComponent }]),
    SuperRoutingModule
  ],
  declarations: [SuperComponent]
})
export class SuperModule {}
