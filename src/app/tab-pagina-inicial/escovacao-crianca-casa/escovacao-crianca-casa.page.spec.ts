import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscovacaoCriancaCasaPage } from './escovacao-crianca-casa.page';

describe('EscovacaoCriancaCasaPage', () => {
  let component: EscovacaoCriancaCasaPage;
  let fixture: ComponentFixture<EscovacaoCriancaCasaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscovacaoCriancaCasaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscovacaoCriancaCasaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
