import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TawkComponent } from './tawk/tawk.component';
import { GoogleSocialLoginComponent } from './google-social-login/google-social-login.component';
import { FacebookSocialLoginComponent } from './facebook-social-login/facebook-social-login.component';
import {SocialLoginModule,AuthServiceConfig} from "angular-6-social-login";
import {getAuthServiceConfigs} from '../app/services/AuthServices';

@NgModule({
  declarations: [
    AppComponent,
    TawkComponent,
    GoogleSocialLoginComponent,
    FacebookSocialLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
