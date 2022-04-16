import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { ApifetchService } from '../services/apifetch.service';
import { UserloginRegisterService } from '../services/userlogin-register.service';
export interface StateGroup {
  letter: string;
  names: string[];
}

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter((item) => item.toLowerCase().includes(filterValue));
};
@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css'],
})
export class WatchlistComponent implements OnInit {
  stocksList: any = [];
  stockListUrl: string = '';
  stockUserData: any = [];
  constructor(
    private userlogin: UserloginRegisterService,
    private http: HttpClient
  ) {
    this.loadList();
  }
  ngOnInit() {}
  // user functions
  loadList() {
    let token: any = localStorage.getItem('token');
    this.userlogin.loadWatchlist({ token }).subscribe((res: any) => {
      res.forEach((element: any) => {
        this.stocksList.push(element[0]);
      });
      console.log(this.stocksList);
      this.makeStr();
      this.loadUserData();
    });
  }

  makeStr() {
    this.stocksList.forEach((element: string) => {
      console.log(element);
      if (this.stockListUrl != '') {
        this.stockListUrl = this.stockListUrl.concat(',', element);
      } else {
        this.stockListUrl = this.stockListUrl.concat(element);
      }
    });
    console.log(this.stockListUrl);
  }

  loadUserData() {
    let finalUrl =
      'http://localhost:3000/nse/get_multiple_quote_info?companyNames=' +
      this.stockListUrl;
    console.log(finalUrl);
    this.http.get(finalUrl).subscribe((res: any) => {
      this.stockUserData = res;
      console.log('hello');
      console.log(this.stockUserData);
    });
  }
}
