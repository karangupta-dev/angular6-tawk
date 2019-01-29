
import {
    AuthServiceConfig,
    GoogleLoginProvider,
    FacebookLoginProvider,
} from "angular-6-social-login";
import { environment } from '../../environments/environment';


export function getAuthServiceConfigs() {
    let config = new AuthServiceConfig(
        [
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider(environment.fbAppId)
          },
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(environment.googleClientId)
          }
        ]
    );
    return config;
  }