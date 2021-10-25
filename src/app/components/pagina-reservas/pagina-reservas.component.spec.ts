import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaReservasComponent } from './pagina-reservas.component';

describe('PaginaReservasComponent', () => {
  let component: PaginaReservasComponent;
  let fixture: ComponentFixture<PaginaReservasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaReservasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaReservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
