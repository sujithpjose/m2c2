import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { Movie } from './../../../models/movie.model';

@Component({
  selector: 'mv-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewAllComponent implements OnInit {

  @Input() movie: Movie;
  @Output() movieSelected: EventEmitter<Movie> = new EventEmitter<Movie>();

  constructor() { }

  ngOnInit() {
  }

  public onMovieSelect(movie: Movie) {
    this.movieSelected.emit(movie);
  }

}

