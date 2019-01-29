import { Component, OnInit } from '@angular/core';
import { AuthService, GoogleLoginProvider } from 'angular-6-social-login';

@Component({
  selector: 'app-google-social-login',
  templateUrl: './google-social-login.component.html',
  styleUrls: ['./google-social-login.component.css']
})
export class GoogleSocialLoginComponent implements OnInit {

  constructor(private socialAuthService: AuthService) { }

  ngOnInit() {
  }
 
  public googleButton()
  {
      this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
        (userData)=>{
          console.log("Google sign in data : " , userData);
      });
  }

}
