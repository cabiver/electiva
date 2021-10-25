import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrucelPrincipalComponent } from './carrucel-principal.component';

describe('CarrucelPrincipalComponent', () => {
  let component: CarrucelPrincipalComponent;
  let fixture: ComponentFixture<CarrucelPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrucelPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrucelPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
