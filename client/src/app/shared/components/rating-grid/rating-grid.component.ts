import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'm2c-rating-grid',
  templateUrl: './rating-grid.component.html',
  styleUrls: ['./rating-grid.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RatingGridComponent implements OnInit {
  @Input() rating: number;
  @Input() votes: number;

  constructor() { }

  ngOnInit(): void {
  }

}
