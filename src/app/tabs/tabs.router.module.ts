import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab-pagina-inicial',
        children: [
          {
            path: '',
            loadChildren: '../tab-pagina-inicial/tab-pagina-inicial.module#TabPaginaInicialPageModule'
          }
        ]
      },
      {
        path: 'tab-notificacoes',
        children: [
          {
            path: '',
            loadChildren: '../tab-notificacoes/tab-notificacoes.module#TabNotificacoesPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab-pagina-inicial',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab-pagina-inicial',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
