import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabPaginaInicialPage } from './tab-pagina-inicial.page';

const routes: Routes = [
  {
    path: '',
    component: TabPaginaInicialPage
  },
  {
    path: 'escovacao-crianca',
    loadChildren: './escovacao-crianca/escovacao-crianca.module#EscovacaoCriancaPageModule'
  },
  {
    path: 'escovacao-crianca-casa',
    loadChildren: './escovacao-crianca-casa/escovacao-crianca-casa.module#EscovacaoCriancaCasaPageModule'
  },
  {
    path: 'higienizacao-bebes',
    loadChildren: './higienizacao-bebes/higienizacao-bebes.module#HigienizacaoBebesPageModule'
  },
  {
    path: 'escovacao-ludica',
    loadChildren: './escovacao-ludica/escovacao-ludica.module#EscovacaoLudicaPageModule'
  },
  {
    path: 'escovacao-adolescente',
    loadChildren: './escovacao-adolescente/escovacao-adolescente.module#EscovacaoAdolescentePageModule'
  },
  {
    path: 'posicoes-tecnicas-indicadas',
    loadChildren: './posicoes-tecnicas-indicadas/posicoes-tecnicas-indicadas.module#PosicoesTecnicasIndicadasPageModule'
  },
  {
    path: 'escovacao-crianca-escola',
    loadChildren: './escovacao-crianca-escola/escovacao-crianca-escola.module#EscovacaoCriancaEscolaPageModule'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabPaginaInicialPage]
})
export class TabPaginaInicialPageModule {}
