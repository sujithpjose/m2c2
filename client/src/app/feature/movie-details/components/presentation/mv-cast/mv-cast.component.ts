import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'mv-cast',
  templateUrl: './mv-cast.component.html',
  styleUrls: ['./mv-cast.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MvCastComponent implements OnInit {
  @Input() data;

  constructor() { }

  ngOnInit(): void {
  }

}
