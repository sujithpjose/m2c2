import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'mv-tab',
  templateUrl: './mv-tab.component.html',
  styleUrls: ['./mv-tab.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MvTabComponent implements OnInit {
  @Input() text: string;

  constructor() { }

  ngOnInit(): void {
  }

}
