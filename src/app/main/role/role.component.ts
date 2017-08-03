import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/service/data.service';
import { NotificationService } from '../../core/service/notification.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  public page: Number = 1;
  public pageSize: Number = 2;
  public totalRows: Number;
  public filter: String = '';
  public roles: any = [];
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this._dataService.get('api/appRole/getlistpaging?page=' + this.page + '&pageSize=' + this.pageSize + '&filter=' + this.filter)
      .subscribe((Response: any) => {
        console.log(Response);
        this.roles = Response.Items;
        this.page = Response.PageIndex;
        this.totalRows = Response.TotalRows;
        this.pageSize = Response.PageSize;
      });
  }
  pageChanged(event: any): void {
    this.page = event.page;
    this.loadData();
  }
}
