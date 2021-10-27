import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosPagesComponent } from './servicios-pages.component';

describe('ServiciosPagesComponent', () => {
  let component: ServiciosPagesComponent;
  let fixture: ComponentFixture<ServiciosPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciosPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
