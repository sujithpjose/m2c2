import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { BaseContainerComponent } from '@app/shared';

import { MovieService } from '@app/feature/home/service/movie.service';
import { Movie, MovieResponse } from './../../../models/movie.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.less']
})
export class SearchResultsComponent extends BaseContainerComponent implements OnInit {
  public searchText: string;
  public movieResponse: MovieResponse;

  p: number = 1;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    public router: Router,
    public toastr: ToastrService
  ) {
    super(router, toastr);
  }

  ngOnInit(): void {
    this.onRouteSubscribe();
  }

  private onRouteSubscribe(): void {
    this.route.params.subscribe(param => {
      this.searchText = param.searchText;
      this.doContentSearch(this.searchText);
    });
  }

  private doContentSearch(searchText, page: number = 1): void {
    this.movieService.doContentSearch(searchText, page)
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
    this.doContentSearch(this.searchText, page);
    window.scrollTo(0, 0);
  }

}
