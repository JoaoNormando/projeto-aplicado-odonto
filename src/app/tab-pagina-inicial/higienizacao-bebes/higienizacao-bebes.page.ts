import { Component, OnInit, ViewChild } from '@angular/core';
import { ConteudoModel } from '../shared/conteudo.model';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-higienizacao-bebes',
  templateUrl: './higienizacao-bebes.page.html',
  styleUrls: ['./higienizacao-bebes.page.scss'],
})
export class HigienizacaoBebesPage implements OnInit {

  @ViewChild(IonSlides) slides: IonSlides;
  conteudoModel: ConteudoModel = new ConteudoModel();

  constructor() { }

  ngOnInit() {
    this.defineModelo();
    this.slides.startAutoplay();
  }

  defineModelo(): void {
    this.conteudoModel.caminhoImagem = 'assets/imagens/pagina-inicial/escovacao-bebes-informacao.jpg';
    this.conteudoModel.textoSlides = [
      'A higiene precisa ser realizada por um adulto, que deve apoiar a cabeça do bebê para melhor conforto dos dois.',
      'Use uma escova própria para bebês, com cabeça pequena e cerdas macias e creme dental com flúor.',
      'Escove seus dentes junto com a criança',
      'Coloque na escova uma pequena quantidade de creme dental, do tamanho de um grão de arroz cru',
      'Escove com movimentos leves e fique atento para passar por todos os lados de todos os dentes do bebê.'
         + 'Se alguma parte não for escovada, poderá surgir cárie.'
    ];
  }

}
