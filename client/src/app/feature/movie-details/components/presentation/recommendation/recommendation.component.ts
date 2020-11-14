import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { Movie } from '@app/feature/movie-details/models/movie-detail.model';

@Component({
  selector: 'mv-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecommendationComponent implements OnInit {
  @Input() recommendations: Movie[];
  @Output() movieSelected: EventEmitter<Movie> = new EventEmitter<Movie>();

  constructor() { }

  ngOnInit(): void {
  }

  public onMovieSelected(movie: Movie): void {
    this.movieSelected.emit(movie);
  }

}
