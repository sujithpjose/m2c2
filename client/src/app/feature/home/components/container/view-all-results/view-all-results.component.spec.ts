import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllResultsComponent } from './view-all-results.component';

describe('ViewAllResultsComponent', () => {
  let component: ViewAllResultsComponent;
  let fixture: ComponentFixture<ViewAllResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
