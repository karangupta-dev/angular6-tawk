
export class StatusChangeResponse{
    status:string;
    authResponse:AuthReponse;
}


class AuthReponse{
    accessToken:string ;
    expiresIn:string ;
    signedRequest:string ;
    reauthorize_required_in:string;
    data_access_expiration_time:string;
    userID:string ;
}
