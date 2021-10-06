import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExporeourstoreComponent } from './exporeourstore.component';

describe('ExporeourstoreComponent', () => {
  let component: ExporeourstoreComponent;
  let fixture: ComponentFixture<ExporeourstoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExporeourstoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExporeourstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
