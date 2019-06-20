import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HigienizacaoBebesPage } from './higienizacao-bebes.page';

describe('HigienizacaoBebesPage', () => {
  let component: HigienizacaoBebesPage;
  let fixture: ComponentFixture<HigienizacaoBebesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HigienizacaoBebesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HigienizacaoBebesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
