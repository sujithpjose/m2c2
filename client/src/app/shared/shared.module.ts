import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { UiLibModule } from '@app/ui-lib/ui-lib.module';

import { SpacerComponent } from './components/spacer/spacer.component';
import { RatingGridComponent } from './components/rating-grid/rating-grid.component';
import { BaseContainerComponent } from './components/base-container/base-container.component';
import { SearchComponent } from './components/search/search.component';
import { DisclaimerComponent } from './components/disclaimer/disclaimer.component';

@NgModule({
  declarations: [
    SpacerComponent,
    RatingGridComponent,
    BaseContainerComponent,
    SearchComponent,
    DisclaimerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    UiLibModule
  ],
  exports: [
    SpacerComponent,
    RatingGridComponent,
    BaseContainerComponent,
    SearchComponent
  ]
})
export class SharedModule { }
