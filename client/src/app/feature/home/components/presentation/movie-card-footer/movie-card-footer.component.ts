import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

import { Movie } from './../../../models/movie.model';

@Component({
  selector: 'movie-card-footer',
  templateUrl: './movie-card-footer.component.html',
  styleUrls: ['./movie-card-footer.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieCardFooterComponent implements OnInit {
  @Input() movie: Movie;
  @Input() dynamicFooter: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
