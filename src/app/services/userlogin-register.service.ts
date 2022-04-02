import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserloginRegisterService {
  private loginURL = 'http://localhost:3000/login';
  private registerURL = 'http://localhost:3000/registeruser';
  private addPortfolio = 'http://localhost:3000/addPortfolio';
  private loadPortfolio = 'http://localhost:3000/loadWatchlist';
  private getstocksList =
    'http://localhost:3000/nse/get_multiple_quote_info?companyNames=';

  constructor(private http: HttpClient, private router: Router) {}

  loginUser(data: any) {
    return this.http.post(this.loginURL, data);
  }

  registerUser(data: any) {
    console.log(data);
    return this.http.post(this.registerURL, data);
  }

  // to check whether token is present in the local storage or not and return  in  boolean value
  loggedIn() {
    return !!localStorage.getItem('token');
  }

  // get the token from the local storage
  getToken() {
    return localStorage.getItem('token');
  }

  logoutUser() {
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }

  // add stock to the portfolio and watchlist
  addToPortfolio(data: any): Observable<any> {
    return this.http.patch(this.addPortfolio, data);
  }
  // load watchlist stocks
  loadWatchlist(data: any): Observable<any> {
    return this.http.post(this.loadPortfolio, data);
  }
}
