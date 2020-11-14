import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { ToastrService } from 'ngx-toastr';
import { BaseContainerComponent } from '@app/shared';

import { MovieDetailsRespose, Movie } from './../../../models/movie-detail.model';
import { MovieMetaTag } from './../../../models/movie-detail-vo.model';

import { MovieDetailsService } from './../../../service/movie-details.service';
import { MovieDetailsHelperService } from './../../../service/movie-details-helper.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.less']
})
export class DetailsComponent extends BaseContainerComponent implements OnInit {
  private movieId: number;
  public movie: MovieDetailsRespose;
  public metaTags: MovieMetaTag[];
  public safeSrc: SafeResourceUrl = undefined;
  public showOverlay = false;
  public recommendations: Movie[] = [];

  constructor(
    private movieDetailsService: MovieDetailsService,
    private movieHelper: MovieDetailsHelperService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    public router: Router,
    public toastr: ToastrService
  ) {
    super(router, toastr);
  }

  ngOnInit(): void {
    this.onRouteSubscribe();
  }

  private onRouteSubscribe() {
    this.route.params
      .subscribe((param) => {
        this.movieId = param.id;
        this.fetchMovieDetails(this.movieId);
      });
  }

  private fetchMovieDetails(movieId: number) {
    this.movieDetailsService.fetchMovieDetails(movieId)
      .subscribe(data => {
        this.movie = data;
        this.metaTags = this.movieHelper.populateMetaTags(data);
        this.recommendations = data.recommendations.results;
        if (data.videos.results.length > 0) {
          this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${data.videos.results[0].key}`);
        } else {
          this.safeSrc = '';
        }
      }, err => this.handleError(err));
  }

  public showTrailer() {
    this.showOverlay = true;
  }

  public onCloseOverlay() {
    this.showOverlay = false;
  }

  public onMovieSelected(movie: Movie): void {
    const path = `movie-details/${movie.id}`;
    this.navigateTo(path);
  }

}
