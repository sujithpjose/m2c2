import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '@app/core';

import { MovieDetailsRespose } from './../models/movie-detail.model';

@Injectable()
export class MovieDetailsService {

  constructor(
    private dataService: DataService
  ) { }

  public fetchMovieDetails(movieId): Observable<MovieDetailsRespose> {
    const url = `movies/${movieId}?append_to_response=credits,videos,recommendations`;
    return this.dataService.get(url);
  }
}
