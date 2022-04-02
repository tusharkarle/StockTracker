import { TestBed } from '@angular/core/testing';

import { UserloginRegisterService } from './userlogin-register.service';

describe('UserloginRegisterService', () => {
  let service: UserloginRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserloginRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
