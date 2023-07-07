import { Injectable } from '@angular/core';
import { StateService } from '@services/state.service';
import { Observable } from 'rxjs';
import { LoginResponse, OidcSecurityService } from 'angular-auth-oidc-client';

interface AuthenticationState {
  isAuthenticated: boolean;
  userData: UserData | null;
}

const initialState: AuthenticationState = {
  isAuthenticated: false,
  userData: null,
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
export class AuthenticationStateService extends StateService<AuthenticationState> {
  isAuthenticated$: Observable<boolean> = this.select(
    (state) => state.isAuthenticated
  );
  userData$: Observable<UserData | null> = this.select(
    (state) => state.userData
  );

  constructor(private securityService: OidcSecurityService) {
    super(initialState);

    this.securityService
      .checkAuth()
      .subscribe((loginResponse: LoginResponse) => {
        const { isAuthenticated, userData } = loginResponse;
        this.setAuthenticated(isAuthenticated);
        this.setUserDate(userData);
        console.log(userData);
      });
  }

  private setAuthenticated(authenticated: boolean): void {
    this.setState({ isAuthenticated: authenticated });
  }

  private setUserDate(userData: UserData): void {
    this.setState({ userData: userData });
  }

  login(): void {
    this.securityService.authorize();
  }

  logout(): void {
    this.securityService.logoff().subscribe((result) => console.log(result));
  }
}
