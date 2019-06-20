import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { ConteudoModel } from '../shared/conteudo.model';

@Component({
  selector: 'app-escovacao-crianca-escola',
  templateUrl: './escovacao-crianca-escola.page.html',
  styleUrls: ['./escovacao-crianca-escola.page.scss'],
})
export class EscovacaoCriancaEscolaPage implements OnInit {

  @ViewChild(IonSlides) slides: IonSlides;
  conteudoModel: ConteudoModel = new ConteudoModel();

  constructor() { }

  ngOnInit() {
    this.defineModelo();
    this.slides.startAutoplay();
  }

  defineModelo(): void {
    this.conteudoModel.caminhoImagem = 'assets/imagens/pagina-inicial/crianca-na-escola-informacao.png';
    this.conteudoModel.textoSlides = [
      'A escovação na escola não substitui a realizada pelos responsáveis. Tem caráter motivacional. É feita de forma coletiva',
      'A melhor pasta de dente a ser enviada, caso  a criança ainda engole a pasta por não saber cuspir, é a sem flúor.'
    ];
  }

}
