import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscovacaoAdolescentePage } from './escovacao-adolescente.page';

describe('EscovacaoAdolescentePage', () => {
  let component: EscovacaoAdolescentePage;
  let fixture: ComponentFixture<EscovacaoAdolescentePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscovacaoAdolescentePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscovacaoAdolescentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
