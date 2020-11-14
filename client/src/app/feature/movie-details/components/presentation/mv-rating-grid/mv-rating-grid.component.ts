import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'mv-rating-grid',
  templateUrl: './mv-rating-grid.component.html',
  styleUrls: ['./mv-rating-grid.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MvRatingGridComponent implements OnInit {
  @Input() movie;

  constructor() { }

  ngOnInit(): void {
  }

}
