import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

class MovieMetaTags {
  constructor(
    public title: string,
    public text: string) { }
}
@Component({
  selector: 'mv-meta-tags',
  templateUrl: './mv-meta-tags.component.html',
  styleUrls: ['./mv-meta-tags.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MvMetaTagsComponent implements OnInit {
  @Input() metaTags;

  constructor() { }

  ngOnInit(): void {
  }

}
