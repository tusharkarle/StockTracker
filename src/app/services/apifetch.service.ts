import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApifetchService {
  private indicesUrl = 'http://localhost:3000/nse/get_indices';
  private topGainersurl = 'http://localhost:3000/nse/get_gainers';
  private toplosersurl = 'http://localhost:3000/nse/get_losers';
  private topVolumeURL = 'http://localhost:3000/nse/get_top_volume_stocks';
  constructor(private http: HttpClient) {}

  getIndices(): Observable<any> {
    return this.http.get(this.indicesUrl);
  }

  TopGainers(): Observable<any> {
    return this.http.get(this.topGainersurl);
  }
  toplosers(): Observable<any> {
    return this.http.get(this.toplosersurl);
  }

  topVolume(): Observable<any> {
    return this.http.get(this.topVolumeURL);
  }
}
