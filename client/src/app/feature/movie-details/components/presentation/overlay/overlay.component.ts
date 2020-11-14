import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mv-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverlayComponent implements OnInit {
  @Output() closeOverlay: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  public onClose() {
    this.closeOverlay.emit(true);
  }

}
