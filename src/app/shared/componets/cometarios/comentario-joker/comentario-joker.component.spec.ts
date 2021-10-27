import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentarioJokerComponent } from './comentario-joker.component';

describe('ComentarioJokerComponent', () => {
  let component: ComentarioJokerComponent;
  let fixture: ComponentFixture<ComentarioJokerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComentarioJokerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentarioJokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
