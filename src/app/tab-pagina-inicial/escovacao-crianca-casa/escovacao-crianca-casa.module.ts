import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EscovacaoCriancaCasaPage } from './escovacao-crianca-casa.page';

const routes: Routes = [
  {
    path: '',
    component: EscovacaoCriancaCasaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EscovacaoCriancaCasaPage]
})
export class EscovacaoCriancaCasaPageModule {}
