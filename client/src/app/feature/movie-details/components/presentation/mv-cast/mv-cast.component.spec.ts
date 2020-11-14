import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MvCastComponent } from './mv-cast.component';

describe('MvCastComponent', () => {
  let component: MvCastComponent;
  let fixture: ComponentFixture<MvCastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MvCastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MvCastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
