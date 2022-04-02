import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { ApifetchService } from 'src/app/services/apifetch.service';
export interface StateGroup {
  letter: string;
  names: string[];
}

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter((item) => item.toLowerCase().includes(filterValue));
};
@Component({
  selector: 'app-stocks-search',
  templateUrl: './stocks-search.component.html',
  styleUrls: ['./stocks-search.component.css'],
})
export class StocksSearchComponent implements OnInit {
  stocklist: any[] = [];

  myControl = new FormControl();
  constructor(private apifetch: ApifetchService) {}

  control = new FormControl();
  streets: string[] = [];
  filteredStreets: Observable<string[]>;

  ngOnInit() {
    // take list of all stocks data
    this.apifetch.getStockList().subscribe((data: any) => {
      this.stocklist = data;
      console.log(this.stocklist);
      Object.keys(this.stocklist).forEach((key: any) => {
        // console.log(key, this.stocklist[key].companyName);
        this.streets.push(this.stocklist[key].companyName);
      });
    });

    this.filteredStreets = this.control.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.streets.filter((street) =>
      this._normalizeValue(street).includes(filterValue)
    );
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

  // user functions

  SearchStock(stockName: any) {
    console.log(stockName);
  }
}
