import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'cbinicio',
    loadChildren: () => import('./conceptos-basicos/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'ley-de-ohm',
    loadChildren: () => import('./ley-de-ohm/ley-de-ohm.module').then( m => m.LeyDeOhmPageModule)
  },
  {
    path: 'corriente',
    loadChildren: () => import('./nivel1/corriente/corriente.module').then( m => m.CorrientePageModule)
  },  {
    path: 'cserie',
    loadChildren: () => import('./nivel1/cserie/cserie.module').then( m => m.CseriePageModule)
  },
  {
    path: 'cparalelo',
    loadChildren: () => import('./nivel1/cparalelo/cparalelo.module').then( m => m.CparaleloPageModule)
  },

  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
