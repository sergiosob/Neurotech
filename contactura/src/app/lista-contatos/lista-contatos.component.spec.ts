import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaContatosComponent } from './lista-contatos.component';

describe('ListaContatosComponent', () => {
  let component: ListaContatosComponent;
  let fixture: ComponentFixture<ListaContatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaContatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaContatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});