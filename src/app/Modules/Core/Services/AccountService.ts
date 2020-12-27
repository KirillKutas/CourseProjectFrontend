import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from './../../../../environments/environment.prod';
import {Observable} from 'rxjs';
import {SessionStorageService} from './SessionStorageService';
import {Game} from '../../Shared/models/Game';
import {CheckGame} from "../../Shared/models/CheckGame";
import {User} from "../../Shared/models/User";
import {AccountBoolResult} from "../../Shared/models/AccountBoolResult";
import {AccountIntResult} from "../../Shared/models/AccountIntResult";
import {AccountImageResult} from "../../Shared/models/AccountImageResult";

@Injectable({providedIn: 'root'})

export class AccountService {
  private URl = `${environment.endpoint}/Account/`;

  constructor(
    private http: HttpClient,
    private sessionService: SessionStorageService
  ) {
  }

  DepositAccount(UserId: string, Amount: number): Observable<AccountIntResult> {
    const myHeaders = new HttpHeaders().set('Authorization', 'Bearer ' + this.sessionService.getToken());
    return this.http.post<AccountIntResult>(this.URl + 'DepositAccount', {UserId, Amount}, {headers: myHeaders});
  }

  UploadImage(Image: FormData): Observable<AccountImageResult> {
    const myHeaders = new HttpHeaders().set('Authorization', 'Bearer ' + this.sessionService.getToken());
    return this.http.post<AccountImageResult>(this.URl + 'UploadImage', Image, {headers: myHeaders});
  }

  ChangePassword(OldPassword: string, NewPassword: string, UserId: string): Observable<AccountBoolResult> {
    const myHeaders = new HttpHeaders().set('Authorization', 'Bearer ' + this.sessionService.getToken());
    return this.http.post<AccountBoolResult>(this.URl + 'ChangePassword', {OldPassword, NewPassword, UserId}, {headers: myHeaders});
  }

}
