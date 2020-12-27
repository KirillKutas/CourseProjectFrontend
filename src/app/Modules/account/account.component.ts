import {Component, OnInit} from '@angular/core';
import {SessionData} from '../Shared/models/session-data.model';
import {SessionStorageService} from '../Core/Services/SessionStorageService';
import {MatDialog} from "@angular/material/dialog";
import {ModalDepositAccountComponent} from "../Helpers/modal-deposit-account/modal-deposit-account.component";
import {AccountService} from "../Core/Services/AccountService";
import {ModalChangePasswordComponent} from "../Helpers/modal-change-password/modal-change-password.component";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  user: SessionData;
  files: any[];
  url: string | ArrayBuffer;

  constructor(private sessionService: SessionStorageService,
              public dialog: MatDialog,
              private accountService: AccountService) {
  }

  ngOnInit(): void {
    this.user = this.sessionService.getUser();

  }

  openDialogDepositAccount(): void {
    const dialogRef = this.dialog.open(ModalDepositAccountComponent, {
      width: '250px'
    });
  }

  openChangePassword(): void {
    const dialogRef = this.dialog.open(ModalChangePasswordComponent, {
      width: '250px'
    });
  }

  GetInvoice(): number {
    return this.sessionService.GetInvoice();
  }


  onFileChanged(event: any): void {
    this.files = event.target.files;
    this.onUpload();
  }

  onUpload(): void {
    const user = this.sessionService.getUser();
    const formData = new FormData();
    formData.append('Image', this.files[0], this.files[0].name);
    formData.append('UserId', user.id);
    this.accountService.UploadImage(formData).subscribe(
      data => {
        user.image = data.result;
        this.sessionService.saveUser(user);
      },
      error => {
        console.log(error);
      }
    );
  }

}
