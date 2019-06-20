import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosicoesTecnicasIndicadasPage } from './posicoes-tecnicas-indicadas.page';

describe('PosicoesTecnicasIndicadasPage', () => {
  let component: PosicoesTecnicasIndicadasPage;
  let fixture: ComponentFixture<PosicoesTecnicasIndicadasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosicoesTecnicasIndicadasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosicoesTecnicasIndicadasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
