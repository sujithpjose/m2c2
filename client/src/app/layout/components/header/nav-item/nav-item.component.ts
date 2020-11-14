import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

export interface MenuItem {
  nav: string;
  label: string;
  disabled: boolean;
}

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavItemComponent implements OnInit {

  @Input() navItem: MenuItem;
  @Output() navItemSelected: EventEmitter<string> = new EventEmitter<string>();

  constructor(
  ) { }

  ngOnInit() {
  }

  public onNavItemClick() {
    this.navItemSelected.emit('/movies');
  }

}
