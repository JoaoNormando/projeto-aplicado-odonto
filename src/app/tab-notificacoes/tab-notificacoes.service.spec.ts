import { TestBed } from '@angular/core/testing';

import { TabNotificacoesService } from './tab-notificacoes.service';

describe('TabNotificacoesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TabNotificacoesService = TestBed.get(TabNotificacoesService);
    expect(service).toBeTruthy();
  });
});
