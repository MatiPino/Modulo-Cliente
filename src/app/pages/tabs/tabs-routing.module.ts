import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './tabs.component';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsComponent,
    children: [
      {
        path: 'principal',
        loadChildren: () => import('../principal/principal.module').then(m => m.PrincipalModule)
      },
      {
        path: 'buscar',
        loadChildren: () => import('../buscar/buscar.module').then(m => m.BuscarModule)
      },
      {
        path: 'super',
        loadChildren: () => import('../super/super.module').then(m => m.SuperModule)
      },
      {
        path: 'carrito',
        loadChildren: () => import('../carrito/carrito.module').then(m => m.CarritoModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('../perfil/perfil.module').then(m => m.PerfilModule)
      },
      {
        path: '',
        redirectTo: '/tabs/principal',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/principal',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
