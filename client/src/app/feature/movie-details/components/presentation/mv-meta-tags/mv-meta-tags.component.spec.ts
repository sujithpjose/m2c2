import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MvMetaTagsComponent } from './mv-meta-tags.component';

describe('MvMetaTagsComponent', () => {
  let component: MvMetaTagsComponent;
  let fixture: ComponentFixture<MvMetaTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MvMetaTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MvMetaTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
