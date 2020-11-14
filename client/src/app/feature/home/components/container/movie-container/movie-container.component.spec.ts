import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieContainerComponent } from './movie-container.component';
import {MovieService} from './../../../service/movie.service';

describe('MovieContainerComponent', () => {
  let component: MovieContainerComponent;
  let fixture: ComponentFixture<MovieContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MovieContainerComponent],
      providers: [MovieService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
