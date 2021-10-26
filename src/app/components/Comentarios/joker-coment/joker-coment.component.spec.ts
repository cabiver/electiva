import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokerComentComponent } from './joker-coment.component';

describe('JokerComentComponent', () => {
  let component: JokerComentComponent;
  let fixture: ComponentFixture<JokerComentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JokerComentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JokerComentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
