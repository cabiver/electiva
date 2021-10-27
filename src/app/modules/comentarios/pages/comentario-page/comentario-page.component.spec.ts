import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentarioPageComponent } from './comentario-page.component';

describe('ComentarioPageComponent', () => {
  let component: ComentarioPageComponent;
  let fixture: ComponentFixture<ComentarioPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComentarioPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentarioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
