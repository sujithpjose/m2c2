import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrefixInterceptor } from './interceptor/prefix.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: PrefixInterceptor, multi: true }
  ],
})
export class CoreModule { }
