import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscovacaoLudicaPage } from './escovacao-ludica.page';

describe('EscovacaoLudicaPage', () => {
  let component: EscovacaoLudicaPage;
  let fixture: ComponentFixture<EscovacaoLudicaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscovacaoLudicaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscovacaoLudicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
