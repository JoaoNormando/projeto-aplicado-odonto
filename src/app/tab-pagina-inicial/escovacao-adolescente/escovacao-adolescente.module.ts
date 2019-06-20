import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EscovacaoAdolescentePage } from './escovacao-adolescente.page';

const routes: Routes = [
  {
    path: '',
    component: EscovacaoAdolescentePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EscovacaoAdolescentePage]
})
export class EscovacaoAdolescentePageModule {}
