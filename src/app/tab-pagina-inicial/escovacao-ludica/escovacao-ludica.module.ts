import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EscovacaoLudicaPage } from './escovacao-ludica.page';

const routes: Routes = [
  {
    path: '',
    component: EscovacaoLudicaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EscovacaoLudicaPage]
})
export class EscovacaoLudicaPageModule {}
