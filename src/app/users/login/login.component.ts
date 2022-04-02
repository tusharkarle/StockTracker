import { Component, OnInit } from '@angular/core';
import { UserloginRegisterService } from 'src/app/services/userlogin-register.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  registerUserData: any = {};
  constructor(
    private loginApi: UserloginRegisterService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  loginUser() {
    this.loginApi.loginUser(this.registerUserData).subscribe((res: any) => {
      console.log(res);
      localStorage.setItem('token', res.token);
      this.router.navigate(['/watchlist']);
    });
  }
}
