import { Component, OnInit, Input, Output, ChangeDetectionStrategy, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'slider-dots',
  templateUrl: './slider-dots.component.html',
  styleUrls: ['./slider-dots.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SliderDotsComponent implements OnInit, OnChanges {
  @Input() count: number;
  @Input() activeIndex: number;
  @Output() activeItem: EventEmitter<number> = new EventEmitter<number>();

  public dots: number[] = [];
  public active = 0;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.count) {
      for (let i = 0; i < this.count; i++) {
        this.dots.push(i);
      }
    }
  }

  ngOnInit(): void {
  }

  public onSelect(item: number): void {
    this.active = item;
    this.activeItem.emit(item);
  }

}
