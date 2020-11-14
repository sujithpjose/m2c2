import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    CommonModule,
    NgxPaginationModule,
    ToastrModule.forRoot()
  ],
  exports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    ToastrModule
  ],
  providers: [
  ]
})
export class UiLibModule { }
