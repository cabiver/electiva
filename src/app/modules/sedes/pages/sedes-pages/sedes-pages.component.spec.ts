import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SedesPagesComponent } from './sedes-pages.component';

describe('SedesPagesComponent', () => {
  let component: SedesPagesComponent;
  let fixture: ComponentFixture<SedesPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SedesPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SedesPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
