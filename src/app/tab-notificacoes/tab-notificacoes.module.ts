import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabNotificacoesPage } from './tab-notificacoes.page';
import { TabNotificacoesService } from './tab-notificacoes.service';
import { FormModalPage } from './form-modal/form-modal.page';

const routes: Routes = [
  {
    path: '',
    component: TabNotificacoesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabNotificacoesPage, FormModalPage],
  providers: [TabNotificacoesService],
  entryComponents: [FormModalPage]
})
export class TabNotificacoesPageModule {}
