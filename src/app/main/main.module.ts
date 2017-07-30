import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';
import { mainRoutes } from './main.routes';
import { AuthenticationService } from '../core/service/authentication.service';
import { NotificationService } from '../core/service/notification.service';
import { UtilityService } from '../core/service/ulti.service';
@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule.forChild(mainRoutes)
  ],
  providers : [
    AuthenticationService,
    NotificationService,
    UtilityService],
  declarations: [MainComponent]
})
export class MainModule { }
