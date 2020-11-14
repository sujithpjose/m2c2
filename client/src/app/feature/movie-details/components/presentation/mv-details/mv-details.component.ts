import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'mv-details',
  templateUrl: './mv-details.component.html',
  styleUrls: ['./mv-details.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MvDetailsComponent implements OnInit {
  @Input() movie;
  @Input() metaTags;

  constructor() { }

  ngOnInit(): void {
  }

}
