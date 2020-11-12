import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

export class SessionStorageService {

  constructor() { }

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

  public getUser(): JSON {
    return JSON.parse(sessionStorage.getItem('auth-user'));
  }

}
