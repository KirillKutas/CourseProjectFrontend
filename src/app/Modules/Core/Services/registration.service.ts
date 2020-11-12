import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { SessionData } from '../../shared/models/session-data.model';
import { environment } from './../../../../environments/environment.prod';
import {Observable} from 'rxjs';

@Injectable({ providedIn: 'root' })

export class RegistrationService {
  private registrationURL = `${environment.endpoint}/Registration`;

  constructor(private http: HttpClient) {}

  registration(username: string, password: string): Observable<SessionData>{
    return this.http.post<SessionData>(this.registrationURL, {
      username, password
    }, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'https://localhost:44341/api', 'Access-Control-Allow-Credentials': 'true'}) });
  }
}

