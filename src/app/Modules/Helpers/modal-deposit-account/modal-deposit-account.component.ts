import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AccountService} from "../../Core/Services/AccountService";
import {SessionStorageService} from "../../Core/Services/SessionStorageService";
import {NotificationService} from "../../Core/Services/notification.service";

@Component({
  selector: 'app-modal-deposit-account',
  templateUrl: './modal-deposit-account.component.html',
  styleUrls: ['./modal-deposit-account.component.css']
})
export class ModalDepositAccountComponent implements OnInit {

  bankAccount = 1;

  constructor(
    public dialogRef: MatDialogRef<ModalDepositAccountComponent>,
    private accountService: AccountService,
    private sessionStorageService: SessionStorageService,
    private snackBar: NotificationService) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

  deposit(): void {
    const user = this.sessionStorageService.getUser();
    if (this.bankAccount <= 0) {
      this.snackBar.openSnackBar('The amount must not be less than or equal to zero');
      return;
    }
    this.accountService.DepositAccount(user.id, this.bankAccount).subscribe(
      data => {
        const invoice = this.sessionStorageService.GetInvoice();
        this.sessionStorageService.SaveInvoice(data.result);
      },
      error => {
        console.log(error);
      }
    );
  }

}
