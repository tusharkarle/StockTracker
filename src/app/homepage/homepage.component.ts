import { Component, OnInit } from '@angular/core';
import { ApifetchService } from '../services/apifetch.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  stockIndices: any;
  topGainers: any;
  toplosers: any;
  topVolume: any;
  constructor(private apifetch: ApifetchService) {}

  ngOnInit(): void {
    this.apifetch.getIndices().subscribe((indicesdata) => {
      this.stockIndices = indicesdata;
      console.log(this.stockIndices);
    });

    this.apifetch.TopGainers().subscribe((gainersdata) => {
      this.topGainers = gainersdata;
      this.topGainers = this.topGainers;
      console.log(this.topGainers);
    });
    this.apifetch.toplosers().subscribe((losersdata) => {
      this.toplosers = losersdata;
      console.log(this.toplosers);
    });
    this.apifetch.topVolume().subscribe((stockdata) => {
      this.topVolume = stockdata;
      console.log(this.topVolume);
    });
  }
}
