import {Injectable} from '@angular/core';
import {SessionData} from "../../Shared/models/session-data.model";

@Injectable({providedIn: 'root'})

export class SessionStorageService {

  constructor() {
  }

  public saveToken(token: string): void {
    sessionStorage.removeItem('auth-token');
    sessionStorage.setItem('auth-token', token);
  }

  public getToken(): string {
    return sessionStorage.getItem('auth-token');
  }

  public saveUser(user): void {
    sessionStorage.removeItem('auth-user');
    sessionStorage.setItem('auth-user', JSON.stringify(user));
  }

  public getUser(): SessionData {
    return JSON.parse(sessionStorage.getItem('auth-user'));
  }

  public SaveInvoice(invoice: number): void {
    sessionStorage.removeItem('bank-account');
    sessionStorage.setItem('bank-account', invoice.toString());
  }

  public GetInvoice(): number {
    return JSON.parse(sessionStorage.getItem('bank-account'));
  }
}
