import { Component, OnInit } from '@angular/core';
import {SystemConstants} from '../core/common/system.constants';
import {UtilityService} from '../core/service/ulti.service';
import { NotificationService } from '../core/service/notification.service';
import { MessageConstants } from '../core/common/message.constants';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private _ulti : UtilityService, private _noti : NotificationService) { }

  ngOnInit() {
  }
  logout(){
    localStorage.removeItem(SystemConstants.CURRENT_USER);
    this._ulti.navigateToLogin();
    this._noti.printSuccessMessage(MessageConstants.LOGOUT_SUCCESS);
  }
}
