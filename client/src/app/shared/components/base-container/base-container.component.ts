import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Router, NavigationExtras } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-base-container',
  templateUrl: './base-container.component.html',
  styleUrls: ['./base-container.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseContainerComponent implements OnInit {

  constructor(
    public router: Router,
    public toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  public navigateTo(url: string, options?: NavigationExtras): void {
    this.router.navigateByUrl(url, options);
  }

  public handleError(err) {
    const msg = err.error ? err.error.message : 'Server error!';
    this.toastr.error(msg);
  }

}
