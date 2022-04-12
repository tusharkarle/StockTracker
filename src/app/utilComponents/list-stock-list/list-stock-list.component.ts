import { Component, Input, OnInit } from '@angular/core';
import { UserloginRegisterService } from 'src/app/services/userlogin-register.service';

@Component({
  selector: 'app-list-stock-list',
  templateUrl: './list-stock-list.component.html',
  styleUrls: ['./list-stock-list.component.css'],
})
export class ListStockListComponent implements OnInit {
  panelOpenState = false;
  @Input() stockData: any;
  constructor(private userlogin: UserloginRegisterService) {}
  ngOnInit(): void {}
  deleteStockWatchlist(stockName: any) {
    this.stockData = this.stockData.filter(
      (item: any) => item.data[0].symbol != stockName
    );
    this.userlogin.removeStock(stockName).subscribe((data) => {
      console.log(data);
    });
    console.log(this.stockData);
  }
}
