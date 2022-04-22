import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SesionComponent } from 'src/paginas/sesion/sesion.component';
import { RegistrarComponent } from 'src/paginas/registrar/registrar.component';
import { PrincipalComponent } from 'src/paginas/principal/principal.component';
 
const routes: Routes = [
  {
    path: 'sesion',
    component: SesionComponent
  },
  {
    path: 'registrar',
    component: RegistrarComponent

  },
  {
    path: 'principal',
    component: PrincipalComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
