import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscovacaoCriancaEscolaPage } from './escovacao-crianca-escola.page';

describe('EscovacaoCriancaEscolaPage', () => {
  let component: EscovacaoCriancaEscolaPage;
  let fixture: ComponentFixture<EscovacaoCriancaEscolaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscovacaoCriancaEscolaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscovacaoCriancaEscolaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
