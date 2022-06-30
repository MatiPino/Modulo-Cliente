import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PrincipalComponent } from './principal.component';

import { PrincipalRoutingModule } from './principal-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PrincipalRoutingModule
  ],
  declarations: [PrincipalComponent]
})
export class PrincipalModule {}
