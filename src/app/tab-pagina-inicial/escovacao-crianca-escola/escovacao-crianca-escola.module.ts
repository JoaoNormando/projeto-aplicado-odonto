import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EscovacaoCriancaEscolaPage } from './escovacao-crianca-escola.page';

const routes: Routes = [
  {
    path: '',
    component: EscovacaoCriancaEscolaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EscovacaoCriancaEscolaPage]
})
export class EscovacaoCriancaEscolaPageModule {}
