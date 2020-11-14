import { Injectable } from '@angular/core';
import { StarRatingConfigService } from 'angular-star-rating';

@Injectable()
export class CustomStarConfigService extends StarRatingConfigService {

  constructor() {
    super();
    this.numOfStars = 10;
    // this.staticColor = 'positive';
  }
}
