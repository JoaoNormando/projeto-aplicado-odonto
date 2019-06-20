import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-pagina-inicial',
  templateUrl: './tab-pagina-inicial.page.html',
  styleUrls: ['./tab-pagina-inicial.page.scss'],
})
export class TabPaginaInicialPage implements OnInit {

  imagem = '/assets/imagens/plano-fundo-01.jpg';

  constructor() { }

  ngOnInit() {
  }

}
