import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchTag:string;
  newsFound;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  onSearch(){
    const params = new HttpParams()
    .set('query', this.searchTag);
    this.http.get<any>('http://hn.algolia.com/api/v1/search?query=&tags=story',{params}).subscribe(data=>{
        this.newsFound = data.hits;
    })
  }

}
