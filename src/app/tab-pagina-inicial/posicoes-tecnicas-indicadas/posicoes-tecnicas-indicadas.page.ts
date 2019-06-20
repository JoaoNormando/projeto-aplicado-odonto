import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { ConteudoModel } from '../shared/conteudo.model';

@Component({
  selector: 'app-posicoes-tecnicas-indicadas',
  templateUrl: './posicoes-tecnicas-indicadas.page.html',
  styleUrls: ['./posicoes-tecnicas-indicadas.page.scss'],
})
export class PosicoesTecnicasIndicadasPage implements OnInit {

  @ViewChild(IonSlides) slides: IonSlides;
  conteudoModel: ConteudoModel = new ConteudoModel();

  constructor() { }

  ngOnInit() {
    this.defineModelo();
    this.slides.startAutoplay();
  }

  defineModelo(): void {
    this.conteudoModel.caminhoImagem = '/assets/imagens/pagina-inicial/tecnica-escovacao-informacao.png';
    this.conteudoModel.textoSlides = [
      'Posição de starkey. Recomendado para crianças maiores de 3 anos com pouca habilidade manual.'
      + ' A criança fica em pé na frente e de costas para a mãe, e encosta a cabeça contra o ventre da mãe ',

      'Posição joelho a joelho. Para bebês e crianças menores de 3 anos de idade - o indicado é a mãe e o pai' +
      ' (ou uma segunda pessoa ) sentar-se de frente para o outro, com os joelhos de um encostado nos joelho do outro.'
      + ' A criança fica deitada com a cabeça no colo de um dos pais e as perninhas no colo do outro.'
      + ' O pai que dá apoio as pernas da criança pode segura-las. A mãe com os dedos indicador e polegar afasta as'
      + ' bochechas para visualizar a cavidade bucal e os dentes.Com a mão direita segura e escova e realiza as técnicas. ',
    ];
  }

}
