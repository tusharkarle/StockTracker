import { Component, Input, OnInit } from '@angular/core';
import { UserloginRegisterService } from 'src/app/services/userlogin-register.service';

@Component({
  selector: 'app-list-stock-list',
  templateUrl: './list-stock-list.component.html',
  styleUrls: ['./list-stock-list.component.css'],
})
export class ListStockListComponent implements OnInit {
  @Input() stockData: any;
  constructor(private userlogin: UserloginRegisterService) {}
  ngOnInit(): void {}
}
