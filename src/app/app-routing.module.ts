import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'inicio-cb',
    loadChildren: () => import('./nivel1-conceptosbasicos/inicio-cb/inicio-cb.module').then( m => m.InicioCbPageModule)
  },
  {
    path: 'corriente',
    loadChildren: () => import('./nivel1-conceptosbasicos/corriente/corriente.module').then( m => m.CorrientePageModule)
  },
  {
    path: 'voltaje',
    loadChildren: () => import('./nivel1-conceptosbasicos/voltaje/voltaje.module').then( m => m.VoltajePageModule)
  },
  {
    path: 'resistencia',
    loadChildren: () => import('./nivel1-conceptosbasicos/resistencia/resistencia.module').then( m => m.ResistenciaPageModule)
  },
  {
    path: 'ley-ohm',
    loadChildren: () => import('./nivel1-conceptosbasicos/ley-ohm/ley-ohm.module').then( m => m.LeyOhmPageModule)
  },
  {
    path: 'quiz-cb',
    loadChildren: () => import('./nivel1-conceptosbasicos/quiz-cb/quiz-cb.module').then( m => m.QuizCbPageModule)
  },
  {
    path: 'inicio-circ',
    loadChildren: () => import('./nivel4-circuitos/inicio-circ/inicio-circ.module').then( m => m.InicioCircPageModule)
  },
  {
    path: 'circuito-serie',
    loadChildren: () => import('./nivel4-circuitos/circuito-serie/circuito-serie.module').then( m => m.CircuitoSeriePageModule)
  },
  {
    path: 'circuito-paralelo',
    loadChildren: () => import('./nivel4-circuitos/circuito-paralelo/circuito-paralelo.module').then( m => m.CircuitoParaleloPageModule)
  },
  {
    path: 'circuito-serie-paralelo',
    loadChildren: () => import('./nivel4-circuitos/circuito-serie-paralelo/circuito-serie-paralelo.module').then( m => m.CircuitoSerieParaleloPageModule)
  },
  {
    path: 'quiz-circ',
    loadChildren: () => import('./nivel4-circuitos/quiz-circ/quiz-circ.module').then( m => m.QuizCircPageModule)
  },
  {
    path: 'inicio-res',
    loadChildren: () => import('./nivel2-resistencias/inicio-res/inicio-res.module').then( m => m.InicioResPageModule)
  },
  {
    path: 'inicio-mul',
    loadChildren: () => import('./nivel3-multimetro/inicio-mul/inicio-mul.module').then( m => m.InicioMulPageModule)
  },
  {
    path: 'inicio-cond',
    loadChildren: () => import('./nivel5-condensadorescapacitancia/inicio-cond/inicio-cond.module').then( m => m.InicioCondPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
