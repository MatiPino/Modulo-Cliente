import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SesionComponent } from 'src/paginas/sesion/sesion.component';
import { RegistrarComponent } from 'src/paginas/registrar/registrar.component';

const routes: Routes = [
  {
    path: 'sesion',
    component: SesionComponent
  },
  {
    path: 'registrar',
    component: RegistrarComponent

  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
