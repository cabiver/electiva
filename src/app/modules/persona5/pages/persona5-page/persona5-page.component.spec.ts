import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Persona5PageComponent } from './persona5-page.component';

describe('Persona5PageComponent', () => {
  let component: Persona5PageComponent;
  let fixture: ComponentFixture<Persona5PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Persona5PageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Persona5PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
