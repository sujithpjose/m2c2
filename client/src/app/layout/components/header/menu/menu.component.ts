import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { Menu, MenuItem } from './menu.constants';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent implements OnInit {
  @Output() navItemSelected: EventEmitter<string> = new EventEmitter<string>();
  public menu: MenuItem[] = [];

  constructor() {
    this.menu = Menu;
  }

  ngOnInit() {
  }

  public onNavItemClick(path: string) {
    this.navItemSelected.emit(path);
  }

}
