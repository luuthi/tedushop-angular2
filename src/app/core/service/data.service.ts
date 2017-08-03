import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { SystemConstants } from '../../core/common/system.constants';
import { MessageConstants } from '../../core/common/message.constants';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { UtilityService } from './ulti.service';
import { NotificationService } from './notification.service';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class DataService {

  private headers: Headers;
  constructor(private _http: Http, private _router: Router, private _authen: AuthenticationService,
    private _notificationService: NotificationService, private _ultiService: UtilityService) {
      this.headers = new Headers();
      this.headers.append('Content-Type','application/json');
     }

  get(uri: string) {
    this.headers.delete("Authorization");
    this.headers.append("Authorization", "Bearer " + this._authen.getLoggedUser().access_token);
    return this._http.get(SystemConstants.BASE_URL + uri, { headers: this.headers }).map(this.extractData);
  }
  post(uri: string, data?: any) {
    this.headers.delete("Authorization");
    this.headers.append("Authorization", "Bearer " + this._authen.getLoggedUser().access_token);
    return this._http.post(SystemConstants.BASE_URL + uri, data, { headers: this.headers }).map(this.extractData);
  }
  put(uri: string, data?: any) {
    this.headers.delete("Authorization");
    this.headers.append("Authorization", "Bearer " + this._authen.getLoggedUser().access_token);
    return this._http.post(SystemConstants.BASE_URL + uri, data, { headers: this.headers }).map(this.extractData);
  }
  delete(uri: string, key: string, id: string) {
    this.headers.delete("Authorization");
    this.headers.append("Authorization", "Bearer " + this._authen.getLoggedUser().access_token);
    return this._http.post(SystemConstants.BASE_URL + uri + "/?" + key, { headers: this.headers }).map(this.extractData);
  }
  postFile(uri: string, data?: any) {
    this.headers.delete("Authorization");
    this.headers.append("Authorization", "Bearer " + this._authen.getLoggedUser().access_token);
    return this._http.post(SystemConstants.BASE_URL + uri, data, { headers: this.headers }).map(this.extractData);
  }
  public handleError(error: any) {
    if (error.status == 401) {
      localStorage.removeItem(SystemConstants.CURRENT_USER);
      this._notificationService.printErrorMessage(MessageConstants.LOGIN_AGAIN_MSG);
      this._ultiService.navigateToLogin();
    } else {
      let errMsg = (error.message) ? error.message : error.status ? `$(error.status) - $(error.statusText)` : "System Error";
      this._notificationService.printErrorMessage(errMsg);
      return Observable.throw(errMsg);
    }
  }
  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }
}
