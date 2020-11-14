import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { MovieService } from './../../../service/movie.service';
import { Movie, MovieResponse } from './../../../models/movie.model';

import { BaseContainerComponent, APP_CONSTANTS, Language } from '@app/shared';

const carousalHeight = 425;
const pageSize = 6;
@Component({
  selector: 'app-movie-container',
  templateUrl: './movie-container.component.html',
  styleUrls: ['./movie-container.component.less']
})
export class MovieContainerComponent extends BaseContainerComponent implements OnInit {
  private trending: Movie[] = [];
  public trendingMovies: Movie[] = [];
  public movies: MovieResponse[] = [];
  public languages: Language[];

  public dotActive: number;
  public count: number;
  public carousalHeight: number;

  constructor(
    private movieService: MovieService,
    public router: Router,
    public toastr: ToastrService
  ) {
    super(router, toastr);
    this.dotActive = 0;
    this.carousalHeight = carousalHeight;
    this.languages = APP_CONSTANTS.languageKeys;
  }

  ngOnInit() {
    this.fetchMovies();
    this.fetchNowPlaying();
  }

  private triggerSliderAutoPlay(pageCount: number): void {

    setInterval(() => {
      let currentPage = this.dotActive < pageCount - 1 ? this.dotActive + 1 : 0;
      this.activeItemChanged(currentPage);
    }, 4000);

  }

  private fetchNowPlaying(): void {
    this.movieService.fetchNowPlaying()
      .subscribe((data: MovieResponse) => {
        this.trending = data.results;
        this.populateCarousal(this.trending);
      }, err => this.handleError(err));
  }

  private fetchMovies() {
    this.movieService.fetchMovieDashboard(this.languages)
      .subscribe((data: MovieResponse[]) => {
        this.movies.push(...data);
      }, err => this.handleError(err));
  }

  private populateCarousal(movies: Movie[]): void {
    this.count = movies.length / pageSize;
    this.trendingMovies = movies.slice((pageSize * this.dotActive), (pageSize * this.dotActive) + pageSize);

    this.triggerSliderAutoPlay(this.count);
  }

  public activeItemChanged(item: number): void {
    this.dotActive = item;
    this.trendingMovies = this.trending.slice((pageSize * this.dotActive), (pageSize * this.dotActive) + pageSize);
  }

  public onMovieSelected(movie: Movie): void {
    const path = `movie-details/${movie.id}`;
    this.navigateTo(path);
  }

  public onViewAll(ln: string): void {
    const path = `movies/view-all/${ln}`;
    this.navigateTo(path);
  }

}
