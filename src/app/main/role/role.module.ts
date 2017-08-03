import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleComponent } from './role.component';
import { RouterModule, Routes } from '@angular/router';
import { DataService } from '../../core/service/data.service';
import { NotificationService } from '../../core/service/notification.service';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import {FormsModule} from '@angular/forms';
export const roleRoutes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: RoleComponent }
]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,PaginationModule,
    RouterModule.forChild(roleRoutes)
  ],
  providers: [DataService, NotificationService],
  declarations: [RoleComponent]
})
export class RoleModule { }
