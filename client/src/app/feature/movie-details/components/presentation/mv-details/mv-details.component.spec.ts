import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MvDetailsComponent } from './mv-details.component';

describe('MvDetailsComponent', () => {
  let component: MvDetailsComponent;
  let fixture: ComponentFixture<MvDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MvDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MvDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
