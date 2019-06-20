import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscovacaoCriancaPage } from './escovacao-crianca.page';

describe('EscovacaoCriancaPage', () => {
  let component: EscovacaoCriancaPage;
  let fixture: ComponentFixture<EscovacaoCriancaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscovacaoCriancaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscovacaoCriancaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
