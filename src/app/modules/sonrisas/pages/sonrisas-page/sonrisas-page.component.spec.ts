import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SonrisasPageComponent } from './sonrisas-page.component';

describe('SonrisasPageComponent', () => {
  let component: SonrisasPageComponent;
  let fixture: ComponentFixture<SonrisasPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SonrisasPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SonrisasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
