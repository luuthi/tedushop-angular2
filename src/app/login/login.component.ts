import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../core/service/authentication.service';
import { NotificationService } from '../core/service/notification.service';
import { UtilityService } from '../core/service/ulti.service';
import { MessageConstants } from '../core/common/message.constants';
import { UrlConstants } from '../core/common/url.constants';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading = false;
  model: any = {};
  returnUrl : string;
  constructor(private _authen: AuthenticationService,
    private _noti: NotificationService,
    private _ulti : UtilityService) { }

  ngOnInit() {
  }
  
  login(){
    this.loading = true;
    this._authen.login(this.model.username,this.model.password).subscribe(data =>{
      this._ulti.navigate(UrlConstants.HOME);
      this._noti.printSuccessMessage(MessageConstants.LOGIN_SUCCESS);
    },error=> {
      this._noti.printErrorMessage(MessageConstants.LOGIN_AGAIN_MSG);
      this.loading = false;
    })
  }
}
