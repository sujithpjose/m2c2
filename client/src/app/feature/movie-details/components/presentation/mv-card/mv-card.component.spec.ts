import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MvCardComponent } from './mv-card.component';

describe('MvCardComponent', () => {
  let component: MvCardComponent;
  let fixture: ComponentFixture<MvCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MvCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MvCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
