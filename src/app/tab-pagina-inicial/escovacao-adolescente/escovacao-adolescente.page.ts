import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { ConteudoModel } from '../shared/conteudo.model';

@Component({
  selector: 'app-escovacao-adolescente',
  templateUrl: './escovacao-adolescente.page.html',
  styleUrls: ['./escovacao-adolescente.page.scss'],
})
export class EscovacaoAdolescentePage implements OnInit {

  @ViewChild(IonSlides) slides: IonSlides;
  conteudoModel: ConteudoModel = new ConteudoModel();

  constructor() { }

  ngOnInit(): void {
    this.defineModelo();
    this.slides.startAutoplay();
  }

  defineModelo(): void {
    this.conteudoModel.caminhoImagem = '/assets/imagens/pagina-inicial/escovacao-adolescente-informativo.jpg';
    this.conteudoModel.textoSlides = [
      'Segure a escova de dentes em um angulo de 45 graus sobre a linha das gengivas.',
      'Quando escove seus dentes, deslize a escova suavemente para frente e para trás sobre a parte frontal,'
      + ' posterior e superior (superfície de mastigação) do dente.'
      + ' Não esfregue com forca ao longo da linha das gengivas, já que poderia irritá-las.',

      'Lembre-se de escovar (e usar o fio dental) atrás dos dentes frontais inferiores.'
        + ' Use as cerdas situadas na ponta da escova para alcançar essa área.'
        + ' Se for difícil atingir essa área com um fio dental regular, teste um porta-fio manual ou elétrica.',
    ];
  }

}
