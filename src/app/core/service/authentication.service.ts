import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { SystemConstants } from '../../core/common/system.constants';
import { LoggedUser } from '../domain/logged.user';
import 'rxjs/add/operator/map';
@Injectable()
export class AuthenticationService {

  constructor(private _http: Http) { }

  login(userName: string, passWord: string) {
    let body = "username=" + encodeURIComponent(userName) +
      "&password=" + encodeURIComponent(passWord) +
      "&grant_type=password";
    let headers = new Headers();
    headers.append("Content-Type", "Application/x-www-form-urlencodeed");
    let options = new RequestOptions({ headers: headers });
    return this._http.post(SystemConstants.BASE_URL + 'api/oauth/token', body, options).map((response: Response)=>{
      let user: LoggedUser = response.json();
      if (user && user.access_token) {
        localStorage.removeItem(SystemConstants.CURRENT_USER);
        localStorage.setItem(SystemConstants.CURRENT_USER, JSON.stringify(user));
      }
    });
  }
  logout() {
    localStorage.removeItem(SystemConstants.CURRENT_USER);
  }
  isUserAuthenticate(): boolean {
    let user = localStorage.getItem(SystemConstants.CURRENT_USER);
    if(user != null) return true;
    return false;
  }
  getLoggedUser(): any {
    let user : LoggedUser;
    if(this.isUserAuthenticate()){
      var userData = JSON.parse(localStorage.getItem(SystemConstants.CURRENT_USER));
      user = new LoggedUser(userData.access_token,userData.userName,userData.fullName,userData.email,userData.avatar);
      return user;
    } else
    return null;
  }
}
