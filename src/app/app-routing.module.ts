import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'tab-pagina-inicial', loadChildren: './tab-pagina-inicial/tab-pagina-inicial.module#TabPaginaInicialPageModule' },
  { path: 'tab-notificacoes', loadChildren: './tab-notificacoes/tab-notificacoes.module#TabNotificacoesPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
