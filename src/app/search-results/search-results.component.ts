import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  @Input() news: [] = [];
  first: number = 0;
  rows: number = 10;
  newsToShow: any;
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges() {
    this.reset();
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.news ? this.first === this.news.length - this.rows : true;
  }

  isFirstPage(): boolean {
    return this.news ? this.first === 0 : true;
  }
}
