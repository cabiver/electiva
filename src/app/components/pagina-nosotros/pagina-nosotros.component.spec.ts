import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaNosotrosComponent } from './pagina-nosotros.component';

describe('PaginaNosotrosComponent', () => {
  let component: PaginaNosotrosComponent;
  let fixture: ComponentFixture<PaginaNosotrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaNosotrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaNosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
