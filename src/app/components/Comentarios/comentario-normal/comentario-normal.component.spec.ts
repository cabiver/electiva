import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentarioNormalComponent } from './comentario-normal.component';

describe('ComentarioNormalComponent', () => {
  let component: ComentarioNormalComponent;
  let fixture: ComponentFixture<ComentarioNormalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComentarioNormalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentarioNormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
