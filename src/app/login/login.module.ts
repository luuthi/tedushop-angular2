import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { loginRoutes } from './login.routes';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from '../core/service/authentication.service';
import { NotificationService } from '../core/service/notification.service';
import { UtilityService } from '../core/service/ulti.service';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule.forChild(loginRoutes)
  ],
  providers: [
    AuthenticationService,
    NotificationService,
    UtilityService
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
