import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgxUiLoaderModule, NgxUiLoaderConfig, NgxUiLoaderRouterModule, NgxUiLoaderHttpModule } from 'ngx-ui-loader';

import { SharedModule } from '@app/shared/shared.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { BaseLayoutComponent } from './components/base-layout/base-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { MenuComponent } from './components/header/menu/menu.component';
import { NavItemComponent } from './components/header/nav-item/nav-item.component';
import { freemem } from 'os';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  "fgsType": "three-strings",
}
@NgModule({
  declarations: [
    BaseLayoutComponent,
    HeaderComponent,
    LogoComponent,
    MenuComponent,
    NavItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    LayoutRoutingModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderRouterModule,
    NgxUiLoaderHttpModule,
    SharedModule
  ],
  exports: [
    BaseLayoutComponent
  ]
})
export class LayoutModule { }
