import { Component, OnInit } from '@angular/core';
import { FB_LOGIN_STATUS } from '../constants';
import { StatusChangeResponse } from '../models/fbAuthResponse';
import { AuthService,FacebookLoginProvider } from 'angular-6-social-login';
@Component({
  selector: 'app-facebook-social-login',
  templateUrl: './facebook-social-login.component.html',
  styleUrls: ['./facebook-social-login.component.css']
})
export class FacebookSocialLoginComponent implements OnInit {

  constructor(private socialAuthService: AuthService ) {}

  ngOnInit() {}

  public fbButton()
  {
      this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then(
        (userData)=>{
          console.log("FB sign in data : " , userData);
      });
  }

  public statusChangeCallback(response: StatusChangeResponse) {
    switch (response.status) {
      case FB_LOGIN_STATUS.CONNECTED: this.userAlreadyLoggedIn(response);
        break;
      case FB_LOGIN_STATUS.NOT_AUTHORIZED: this.userLogin();
        break;
      default: this.forceLogin();
    }
  }

  private userAlreadyLoggedIn(response: StatusChangeResponse) {
    console.table(response);
  }

  private userLogin() {
    console.log("login user");
  }

  private forceLogin() {
    console.log("force login");
  }


}
