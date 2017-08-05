import { Component, OnInit, TemplateRef } from '@angular/core';
import { DataService } from '../../core/service/data.service';
import { MessageConstants } from '../../core/common/message.constants';
import { NotificationService } from '../../core/service/notification.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  //@ViewChild('myModal') public myModal:ModalDirective;
  public modalRef: BsModalRef;
  public page: Number = 1;
  public pageSize: Number = 2;
  public totalRows: Number;
  public filter: String = '';
  public roles: any = [];
  public config = {
    animated: true,
    keyboard: false,
    backdrop: true,
    ignoreBackdropClick: true
  };
  public entity: any;
  constructor(private _dataService: DataService, private modalService: BsModalService, private _noti: NotificationService) { }

  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this._dataService.get('api/appRole/getlistpaging?page=' + this.page + '&pageSize=' + this.pageSize + '&filter=' + this.filter)
      .subscribe((Response: any) => {
        this.roles = Response.Items;
        this.page = Response.PageIndex;
        this.totalRows = Response.TotalRows;
        this.pageSize = Response.PageSize;
      });
  }
  loadDetail(id: any) {
    this._dataService.get('api/appRole/detail/' + id).subscribe((Response: any) => {
      this.entity = Response;
    })
  }
  pageChanged(event: any): void {
    this.page = event.page;
    this.loadData();
  }
  showAddModal(template: TemplateRef<any>) {
    this.entity = {};
    this.modalRef = this.modalService.show(template, this.config);
  }
  showEditModal(template: TemplateRef<any>, id: any) {
    this.entity = this.loadDetail(id)
    this.modalRef = this.modalService.show(template, this.config);
  }
  saveChanges(valid: boolean) {
    if (valid) {
      if (this.entity.Id === undefined) {
        this._dataService.post('api/appRole/add', JSON.stringify(this.entity)).subscribe((Response: any) => {
          this.loadData();
          this.modalRef.hide();
          this._noti.printSuccessMessage(MessageConstants.CREATE_SUCCESS_MSG);
        }, error => this._dataService.handleError(error))
      } else {
        this._dataService.put('api/appRole/update', JSON.stringify(this.entity)).subscribe((Response: any) => {
          this.loadData();
          this.modalRef.hide();
          this._noti.printSuccessMessage(MessageConstants.UPDATE_SUCCESS_MSG);
        }, error => this._dataService.handleError(error))
      }
    }
  }
  delete(id: any) {
    this._noti.printConfirmationDialog(MessageConstants.CONFIRM_DELETE_MSG, () => this.deleteConfirm(id));
  }
  deleteConfirm(id: any) {
    this._dataService.delete('api/appRole/delete', 'id', id).subscribe((Response: any) => {
      this._noti.printSuccessMessage(MessageConstants.DELETE_SUCCESS_MSG);
      this.loadData();
    });
  }
}
