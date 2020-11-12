import {Component, OnInit, ViewChild} from '@angular/core';
import {MatMenuTrigger} from '@angular/material/menu';
import {Router} from '@angular/router';
import {Globals} from '../Shared/globals/globals';
import {SessionStorageService} from '../Core/Services/SessionStorageService';
import {SessionData} from "../Shared/models/session-data.model";
import {AuthService} from "../Core/Services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  User: JSON | SessionData;

  navigate(url): void {
    this.router.navigate([url]);
  }

  openGenre(param): void {
    this.router.navigate(['/genre/' + param]);
  }

  openCategory(param): void {
    this.router.navigate(['/category/' + param]);
  }

  logout(): void {
    this.authService.logout();
    this.navigate('');
  }

  checkUser(): boolean {
    this.User = this.globals.user == null ? this.sessionStorage.getUser() : this.globals.user;
    if (this.User != null) {
      return true;
    } else {
      return false;
    }

  }

  triggerMenu(): void {
    this.trigger.openMenu();
  }

  constructor(private router: Router,
              private globals: Globals,
              private sessionStorage: SessionStorageService,
              private authService: AuthService) {
  }

  ngOnInit(): void {
  }

}
