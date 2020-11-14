import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosterImgComponent } from './poster-img.component';

describe('PosterImgComponent', () => {
  let component: PosterImgComponent;
  let fixture: ComponentFixture<PosterImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosterImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosterImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
