import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MvTabComponent } from './mv-tab.component';

describe('MvTabComponent', () => {
  let component: MvTabComponent;
  let fixture: ComponentFixture<MvTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MvTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MvTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
