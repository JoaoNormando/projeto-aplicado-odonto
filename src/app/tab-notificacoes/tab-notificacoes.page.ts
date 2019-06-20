import { Component, OnInit } from '@angular/core';
import { TabNotificacoesService } from './tab-notificacoes.service';
import { NotificacaoModel } from './tab-notificacoes.model';
import { LoadingController, NavController, ModalController, AlertController } from '@ionic/angular';
import { FormModalPage } from './form-modal/form-modal.page';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-tab-notificacoes',
  templateUrl: './tab-notificacoes.page.html',
  styleUrls: ['./tab-notificacoes.page.scss'],
})
export class TabNotificacoesPage implements OnInit {

  notificacoes: NotificacaoModel[];

  constructor(private notificacaoService: TabNotificacoesService, private loadingController: LoadingController,
              private navController: NavController, private modalController: ModalController,
              private alertController: AlertController) { }

  ngOnInit() {
    this.recuperaNotificacoes();
  }

  async recuperaNotificacoes() {
    const carregamento = await this.loadingController.create({
      message: 'Carregando notificações...'
    });

    carregamento.present();

    this.notificacaoService.findAll().then(resposta => {
      this.notificacoes = resposta;
      carregamento.dismiss();
    });
  }

  async paginaNovaNotificacao() {
    const modal = await this.modalController.create({
      component: FormModalPage,
    });

    modal.onDidDismiss().then(() => this.recuperaNotificacoes());

    modal.present();
  }

  async removerNotificacao(nome: string, slidingItem: IonItemSliding) {
    const alerta = await this.alertController.create({
      header: 'Sucesso!',
      message: 'Notificação removida com sucesso',
      backdropDismiss: false,
      buttons: [
        { text: 'Ok', handler: () => {
            slidingItem.close();
            this.recuperaNotificacoes();
          }
        }
      ]
    });

    this.notificacaoService.delete(nome).then(() => {
      alerta.present();
    });
  }

}
