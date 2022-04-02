import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserloginRegisterService } from 'src/app/services/userlogin-register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerUserData: any = {};
  constructor(
    private loginapi: UserloginRegisterService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  loginUser() {
    this.loginapi
      .registerUser({ userlogin: this.registerUserData })
      .subscribe((res: any) => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/watchlist']);
      });
  }
}
