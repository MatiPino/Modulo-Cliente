import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ExplorarComponent } from 'src/paginas/explorar/explorar.component';
 
const routes: Routes = [
  
  {
    path: 'explorar',
    component: ExplorarComponent
  },
  
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
