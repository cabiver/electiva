import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaSedesComponent } from './pagina-sedes.component';

describe('PaginaSedesComponent', () => {
  let component: PaginaSedesComponent;
  let fixture: ComponentFixture<PaginaSedesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaSedesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaSedesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
