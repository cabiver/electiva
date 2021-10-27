import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaPagesComponent } from './agenda-pages.component';

describe('AgendaPagesComponent', () => {
  let component: AgendaPagesComponent;
  let fixture: ComponentFixture<AgendaPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendaPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
