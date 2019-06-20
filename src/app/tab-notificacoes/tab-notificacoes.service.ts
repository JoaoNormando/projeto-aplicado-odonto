import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { NotificacaoModel } from './tab-notificacoes.model';

@Injectable({
  providedIn: 'root'
})
export class TabNotificacoesService {

  constructor(private storage: Storage) { }

  create(notificacao: NotificacaoModel) {
    return this.storage.set(notificacao.nome, notificacao);
  }

  findAll(): Promise<NotificacaoModel[]> {
    const notificacoes: NotificacaoModel[] = [];

    const promise = new Promise<NotificacaoModel[]>((resolve, reject) => {
      this.storage.forEach((value, key, index) => {
        notificacoes.push(new NotificacaoModel(value.nome, value.data));
      }).then(() => resolve(notificacoes));
    });
    return promise;
  }

  delete(nome: string) {
    return this.storage.remove(nome);
  }

}
