import { Component, OnInit } from '@angular/core';
import { UserloginRegisterService } from '../services/userlogin-register.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(public userapi: UserloginRegisterService) {}

  ngOnInit(): void {}
  logoutUser() {
    this.userapi.logoutUser();
  }
}
