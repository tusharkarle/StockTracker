import { Injector ,Injectable} from '@angular/core';
import { UserloginRegisterService } from './userlogin-register.service';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorService {
  constructor(private injector: Injector) {}

  intercept(req: any, next: any) {
    //to get an instance of authservice
    let authService = this.injector.get(UserloginRegisterService);
    // clone the req and add the data ie token
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authService.getToken()}`,
      },
    });

    return next.handle(tokenizedReq);
  }
}
