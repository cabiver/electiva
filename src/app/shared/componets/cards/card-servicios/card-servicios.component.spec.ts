import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardServiciosComponent } from './card-servicios.component';

describe('CardServiciosComponent', () => {
  let component: CardServiciosComponent;
  let fixture: ComponentFixture<CardServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardServiciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
