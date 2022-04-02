import { HttpBackend, HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ApifetchService } from 'src/app/services/apifetch.service';
import { UserloginRegisterService } from 'src/app/services/userlogin-register.service';

@Component({
  selector: 'app-search-stocks-keyword',
  templateUrl: './search-stocks-keyword.component.html',
  styleUrls: ['./search-stocks-keyword.component.css'],
})
export class SearchStocksKeywordComponent implements OnInit {
  searchStocks: any[] = [];

  constructor(
    private http: HttpClient,
    private userlogin: UserloginRegisterService
  ) {}

  ngOnInit(): void {}

  SearchStocks(keyword: any) {
    let keywordSearchUrl = 'http://localhost:3000/nse/search_stocks?keyword=';
    keywordSearchUrl = keywordSearchUrl + keyword;
    console.log(keywordSearchUrl);
    this.http.get(keywordSearchUrl).subscribe((data: any) => {
      // console.log(data);
      if (data.length != 0) {
        this.searchStocks = data;
        console.log(this.searchStocks);
      } else {
        this.searchStocks = [];
        console.log(this.searchStocks);
      }
    });
  }

  addToWatchList(symbol: any) {
    let gtoken = localStorage.getItem('token');
    let dataObject: any = { stocks: symbol, token: gtoken };
    this.userlogin.addToPortfolio(dataObject).subscribe((res) => {
      console.log(res);
    });
  }
}
