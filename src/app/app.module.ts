import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http'
import { PrincipalService } from 'src/service/new.service';
import { SuperService } from 'src/service/super.service';
import { PipesModule } from './pipes/pipes.module';
import { SuperModule } from 'src/pages/super/super.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(), 
    AppRoutingModule,
    PipesModule,
    HttpClientModule,
    SuperModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    PrincipalService,
    SuperService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
