import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';
import { UiLibModule } from '@app/ui-lib/ui-lib.module';
import { MovieDetailsRoutingModule } from './movie-details-routing.module';

import { DetailsComponent } from './components/container/details/details.component';
import { MvCardComponent } from './components/presentation/mv-card/mv-card.component';
import { MvDetailsComponent } from './components/presentation/mv-details/mv-details.component';
import { MvRatingGridComponent } from './components/presentation/mv-rating-grid/mv-rating-grid.component';
import { MvTabComponent } from './components/presentation/mv-tab/mv-tab.component';
import { MvMetaTagsComponent } from './components/presentation/mv-meta-tags/mv-meta-tags.component';
import { MvCastComponent } from './components/presentation/mv-cast/mv-cast.component';

import { MovieDetailsHelperService } from './service/movie-details-helper.service';
import { MovieDetailsService } from './service/movie-details.service';
import { OverlayComponent } from './components/presentation/overlay/overlay.component';
import { RecommendationComponent } from './components/presentation/recommendation/recommendation.component';

@NgModule({
  declarations: [
    DetailsComponent,
    MvCardComponent,
    MvDetailsComponent,
    MvRatingGridComponent,
    MvTabComponent,
    MvMetaTagsComponent,
    MvCastComponent,
    OverlayComponent,
    RecommendationComponent
  ],
  imports: [
    CommonModule,
    MovieDetailsRoutingModule,
    SharedModule,
    UiLibModule
  ],
  providers: [
    MovieDetailsHelperService,
    MovieDetailsService
  ]
})
export class MovieDetailsModule { }
