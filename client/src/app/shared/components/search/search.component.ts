import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'm2c-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {
  public searchText: string;
  public searchKey: 'Movies' | 'TV Shows' = 'Movies';

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public onContentSearch(): void {
    if (!this.searchText || this.searchText.length === 0) return;
    const url = `movies/${this.searchText}`;
    this.router.navigateByUrl(url);
  }

}
