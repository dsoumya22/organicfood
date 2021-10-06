import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreourstoreComponent } from './exploreourstore.component';

describe('ExploreourstoreComponent', () => {
  let component: ExploreourstoreComponent;
  let fixture: ComponentFixture<ExploreourstoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreourstoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreourstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
