import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { Movie } from './../../../models/movie.model';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieCardComponent implements OnInit {
  @Input() movie: Movie;
  @Output() movieSelected: EventEmitter<Movie> = new EventEmitter<Movie>();

  public dynamicFooter = true;

  constructor() { }

  ngOnInit() {
  }

  public onMovieSelect(movie: Movie) {
    this.movieSelected.emit(movie);
  }

}
