import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../core/service/ulti.service';
import { NotificationService } from '../core/service/notification.service';
import { MessageConstants } from '../core/common/message.constants';
import { SystemConstants } from '../core/common/system.constants';
import { LoggedUser } from '../core/domain/logged.user'
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  user: LoggedUser;
  constructor(private _ulti: UtilityService, private _noti: NotificationService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem(SystemConstants.CURRENT_USER));
    console.log(this.user);
  }
  logout() {
    localStorage.removeItem(SystemConstants.CURRENT_USER);
    this._ulti.navigateToLogin();
  }
}
