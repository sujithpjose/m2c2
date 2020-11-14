import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MvRatingGridComponent } from './mv-rating-grid.component';

describe('MvRatingGridComponent', () => {
  let component: MvRatingGridComponent;
  let fixture: ComponentFixture<MvRatingGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MvRatingGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MvRatingGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
