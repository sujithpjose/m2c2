import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

const placeHolderImageUrl = '/assets/images/slider_placeholder.svg';
@Component({
  selector: 'm2c-poster-img',
  templateUrl: './poster-img.component.html',
  styleUrls: ['./poster-img.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PosterImgComponent implements OnInit {
  @Input() imageUrl: string;

  constructor() { }

  ngOnInit(): void {
    this.imageUrl = this.imageUrl ? this.imageUrl : placeHolderImageUrl;
  }

}
