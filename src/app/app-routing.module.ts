import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { VerProductoComponent } from 'src/app/pages/ver-producto/ver-producto.component';
import { DetalleComponent } from './pages/detalle/detalle.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'productos',
    loadChildren: () => import('./pages/productos/productos.module').then( m => m.ProductosPageModule)
  },
  {
    path: 'detalle/:id',
    // loadChildren: () => import('./pages/detalle/detalle.module').then( m => m.DetalleModule)
    component:DetalleComponent
  },
  {
    path:'verProducto/:id',
    component:VerProductoComponent
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
