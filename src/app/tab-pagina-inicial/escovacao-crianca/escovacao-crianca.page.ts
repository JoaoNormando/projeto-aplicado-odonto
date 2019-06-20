import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { EscovacaoCriancaModel } from './escovacao-crianca.model';

@Component({
  selector: 'app-escovacao-crianca',
  templateUrl: './escovacao-crianca.page.html',
  styleUrls: ['./escovacao-crianca.page.scss'],
})
export class EscovacaoCriancaPage implements OnInit {

  @ViewChild(IonSlides) slides: IonSlides;
  escovacaoCriancaModel: EscovacaoCriancaModel = new EscovacaoCriancaModel();

  constructor() { }

  ngOnInit(): void {
    this.defineModelo();
    this.slides.startAutoplay();
  }

  defineModelo(): void {
    this.escovacaoCriancaModel.caminhoImagem = 'assets/imagens/escovacao-crianca.png';
    this.escovacaoCriancaModel.textoSlides = [
      'Use sempre escovas macias e a quantidade de pasta dental correta (um pingo do tamanho de um grão de arroz crú)',
      'Faça desse momento uma brincadeira divertida',
      'Escove seus dentes junto com a criança',
      'Deixe que ela escove os próprios dentes',
      'Deixe que a criança escove os seus dentes para incentiva-lá',
      'Depois escove os dentes da criança da maneira correta',
    ];
  }
}
