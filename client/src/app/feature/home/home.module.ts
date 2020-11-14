import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiLibModule } from './../../ui-lib/ui-lib.module';

import { SharedModule } from './../../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';


import { MovieService } from './service/movie.service';

import { MovieCardComponent } from './components/presentation/movie-card/movie-card.component';
import { MovieContainerComponent } from './components/container/movie-container/movie-container.component';
import { MovieCardFooterComponent } from './components/presentation/movie-card-footer/movie-card-footer.component';
import { SliderDotsComponent } from './components/presentation/slider-dots/slider-dots.component';
import { SliderCarousalComponent } from './components/presentation/slider-carousal/slider-carousal.component';
import { PosterImgComponent } from './components/presentation/poster-img/poster-img.component';
import { SearchResultsComponent } from './components/container/search-results/search-results.component';
import { ViewAllComponent } from './components/presentation/view-all/view-all.component';
import { ViewAllResultsComponent } from './components/container/view-all-results/view-all-results.component';

@NgModule({
  declarations: [
    MovieCardComponent,
    MovieContainerComponent,
    MovieCardFooterComponent,
    SliderDotsComponent,
    SliderCarousalComponent,
    PosterImgComponent,
    SearchResultsComponent,
    ViewAllComponent,
    ViewAllResultsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    UiLibModule,
    SharedModule
  ],
  providers: [
    MovieService
  ]
})
export class HomeModule { }
