import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { ConteudoModel } from '../shared/conteudo.model';

@Component({
  selector: 'app-escovacao-ludica',
  templateUrl: './escovacao-ludica.page.html',
  styleUrls: ['./escovacao-ludica.page.scss'],
})
export class EscovacaoLudicaPage implements OnInit {

  @ViewChild(IonSlides) slides: IonSlides;
  conteudoModel: ConteudoModel = new ConteudoModel();

  constructor() { }

  ngOnInit() {
    this.defineModelo();
    this.slides.startAutoplay();
  }

  defineModelo(): void {
    this.conteudoModel.caminhoImagem = '/assets/imagens/pagina-inicial/escovacao-ludica-informacao.jpg';
    this.conteudoModel.textoSlides = [
      'Escove os dentes junto com seu filho',
      'Dar o exemplo é fundamental, para isso, tenha uma rotina de escovação. Use o fio dental e procure mostrar ao seu filho esse hábito.',

      'Crie histórias com os personagens favoritos do seu filho, utilize vozes e sons diferentes' +
        ' para que ele se solte e aproveite a escovação.',

      'Outra opção para estimular os pequenos é levar a boneca ou bichinho de pelúcia para escovar os dentes juntos.',
      'Invente músicas, abuse dos recursos visuais por meio de vídeos no celular e o que mais vier a cabeça.',

      'Utilize produtos atraentes para que a criança se convença que escovar os dentes pode ser divertido ' +
        'e que faz bem pra saúde bucal dele.'
    ];
  }

}
