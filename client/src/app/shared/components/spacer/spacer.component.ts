import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-spacer',
  templateUrl: './spacer.component.html',
  styleUrls: ['./spacer.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpacerComponent implements OnInit {
  @Input() height = 15;

  constructor() { }

  ngOnInit(): void {
  }

}
