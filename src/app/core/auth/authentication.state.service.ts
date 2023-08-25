import { Injectable } from '@angular/core';
import { StateService } from '@services/state.service';
import { Observable } from 'rxjs';
import { LoginResponse, OidcSecurityService } from 'angular-auth-oidc-client';

const initialState: LoginResponse = {
  isAuthenticated: false,
  userData: '',
  accessToken: '',
  idToken: '',
  configId: '',
  errorMessage: '',
};

export type UserData = {
  email: string;
  email_verified: boolean;
  family_name: string;
  given_name: string;
  preferred_username: string;
  sub: string;
};

@Injectable({
  providedIn: 'root',
})
export class AuthenticationStateService extends StateService<LoginResponse> {
  loginResponse$: Observable<LoginResponse> = this.select(
    (loginResponse) => loginResponse
  );

  constructor(private securityService: OidcSecurityService) {
    super(initialState);

    this.securityService
      .checkAuth()
      .subscribe((loginResponse: LoginResponse) => {
        this.setLoginResponse(loginResponse);
      });
  }

  private setLoginResponse(loginResponse: LoginResponse): void {
    this.setState(loginResponse);
  }

  getLoginResponse(): LoginResponse {
    return this.state;
  }

  login(): void {
    this.securityService.authorize();
  }

  logout(): void {
    this.securityService.logoff().subscribe((result) => console.log(result));
  }
}
