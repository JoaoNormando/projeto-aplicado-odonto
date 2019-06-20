import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, AlertController } from '@ionic/angular';
import { NotificacaoModel } from '../tab-notificacoes.model';
import { TabNotificacoesService } from '../tab-notificacoes.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.page.html',
  styleUrls: ['./form-modal.page.scss'],
})
export class FormModalPage implements OnInit {

  id: number;
  notificacaoModel: NotificacaoModel = new NotificacaoModel();

  constructor(private navParams: NavParams, private modalController: ModalController,
              private notificacaoService: TabNotificacoesService, private alertController: AlertController) { }

  ngOnInit() {
    this.id = this.navParams.get('id');
  }

  async salvar(formulario: NgForm) {
    if (!formulario.valid) {
      return;
    }
    this.notificacaoService.create(this.notificacaoModel);

    const alerta = await this.alertController.create({
      header: 'Sucesso!',
      message: 'Notificação cadastrada com sucesso',
      backdropDismiss: false,
      buttons: [
        { text: 'Ok', handler: () => { this.fechaModal(); }}
      ]
    });

    alerta.present();

  }

  fechaModal() {
    this.modalController.dismiss();
  }

}
