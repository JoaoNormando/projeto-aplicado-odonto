import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabPaginaInicialPage } from './tab-pagina-inicial.page';

describe('TabPaginaInicialPage', () => {
  let component: TabPaginaInicialPage;
  let fixture: ComponentFixture<TabPaginaInicialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabPaginaInicialPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabPaginaInicialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
