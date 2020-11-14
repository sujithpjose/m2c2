import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { BaseContainerComponent } from '@app/shared';

import { MovieService } from '@app/feature/home/service/movie.service';
import { MovieResponse, Movie } from './../../../models/movie.model';
import { APP_CONSTANTS, Language } from '@app/shared';

@Component({
  selector: 'app-view-all-results',
  templateUrl: './view-all-results.component.html',
  styleUrls: ['./view-all-results.component.less']
})
export class ViewAllResultsComponent extends BaseContainerComponent implements OnInit {

  public language: string;
  public movieResponse: MovieResponse;
  public languages: Language[];

  p: number = 1;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    public router: Router,
    public toastr: ToastrService
  ) {
    super(router, toastr);
    this.languages = APP_CONSTANTS.languageKeys;
  }

  ngOnInit(): void {
    this.language = this.route.snapshot.params.language;
    this.fetchMovies(this.language);
  }

  private fetchMovies(language: string, page: number = 1): void {
    const langKey = this.languages.find(lang => lang.name === this.language);
    this.movieService.generateMovieResponses(langKey, page)
      .subscribe(data => {
        this.movieResponse = data;
      }, err => this.handleError(err));
  }

  public onMovieSelected(movie: Movie): void {
    const path = `/movie-details/${movie.id}`;
    this.navigateTo(path);
  }

  public pageChanged(page: number) {
    this.p = page;
    this.fetchMovies(this.language, page);
    window.scrollTo(0, 0);
  }

}

