import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {AccountService} from "../../Core/Services/AccountService";
import {SessionStorageService} from "../../Core/Services/SessionStorageService";

@Component({
  selector: 'app-modal-change-password',
  templateUrl: './modal-change-password.component.html',
  styleUrls: ['./modal-change-password.component.css']
})
export class ModalChangePasswordComponent implements OnInit {

  oldPassword: string;
  newPassword: string;

  constructor(
    public dialogRef: MatDialogRef<ModalChangePasswordComponent>,
    private accountService: AccountService,
    private sessionStorageService: SessionStorageService) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

  changePassword(): void {
    const user = this.sessionStorageService.getUser();

    this.accountService.ChangePassword(this.oldPassword, this.newPassword, user.id).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

}
