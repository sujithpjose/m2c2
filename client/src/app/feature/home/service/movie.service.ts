import { Injectable } from '@angular/core';
import { Observable, from, forkJoin } from 'rxjs';

import { DataService } from '@app/core';
import { APP_CONSTANTS, Language } from '@app/shared/constants/app.constants';
import { UtilService } from '@app/core';

import { MovieResponse } from '@app/feature/home/models/movie.model';

@Injectable()
export class MovieService {
  private currentDate: string;

  constructor(
    private dataService: DataService,
    private util: UtilService
  ) {
    const today = new Date();
    this.currentDate = this.util.formatDate(today);
  }

  public fetchMovieDashboard(languageKeys: Language[]): Observable<MovieResponse[]> {

    const responses = languageKeys.map(key => {
      return this.generateMovieResponses(key);
    });

    return forkJoin(...responses);

  }

  public fetchNowPlaying(): Observable<MovieResponse> {
    const url = `movies/nowPlaying`;
    return this.dataService.get(url);
  }

  public doContentSearch(searchText: string, page: number): Observable<MovieResponse> {

    const url = `movies/search?query=${searchText}&page=${page}`;
    return this.dataService.get(url);

  }

  public generateMovieResponses(key: Language, page: number = 1): Observable<MovieResponse> {
    const url = `movies/discover?date=${this.currentDate}&language=${key.value}&page=${page}`;
    return this.dataService.get(url);
  }

}
