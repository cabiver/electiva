import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPersonaComponent } from './header-persona.component';

describe('HeaderPersonaComponent', () => {
  let component: HeaderPersonaComponent;
  let fixture: ComponentFixture<HeaderPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderPersonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
