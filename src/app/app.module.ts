import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http'
import { ComidaService } from 'src/service/comida.service';
import { RestauranteService } from 'src/service/restaurantes.service';
import { PipesModule } from 'src/pipes/pipes.module';
import { RestaurantesPipe } from '../pipes/restaurantes.pipe';
import { CarritoService } from 'src/service/carrito.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(), 
    AppRoutingModule,
    PipesModule,
    HttpClientModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ComidaService,
    RestauranteService,
    RestaurantesPipe,
    CarritoService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
