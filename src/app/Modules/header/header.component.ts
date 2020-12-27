import {Component, OnInit, ViewChild} from '@angular/core';
import {MatMenuTrigger} from '@angular/material/menu';
import {Router} from '@angular/router';
import {Globals} from '../Shared/globals/globals';
import {SessionStorageService} from '../Core/Services/SessionStorageService';
import {SessionData} from '../Shared/models/session-data.model';
import {AuthService} from '../Core/Services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  searchString: string;

  User: JSON | SessionData;

  navigate(url): void {
    this.router.navigate([url]);
  }

  openGenre(param): void {
    const url = this.router.url.split('/');
    if (url[1] === 'genre') {
      window.location.href = 'http://localhost:4200/genre/' + param;
    } else {
      this.router.navigate(['/genre/' + param]);
    }
  }

  openCategory(param): void {
    const url = this.router.url.split('/');
    if (url[1] === 'category') {
      window.location.href = 'http://localhost:4200/category/' + param;
    } else {
      this.router.navigate(['/category/' + param]);
    }
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

  getInvoice(): number {
    return this.sessionStorage.GetInvoice();
  }

  getImage(): string {
    return this.sessionStorage.getUser().image;
  }

  triggerMenu(): void {
    this.trigger.openMenu();
  }

  search(): void {
    const url = this.router.url.split('/');
    if (url[1] === 'search') {
      window.location.href = 'http://localhost:4200/search/' + this.searchString;
    } else {
      this.router.navigate(['/search/' + this.searchString]);
    }
  }

  GetRole(): number {
    const user = this.sessionStorage.getUser();
    if (user !== null) {
      return user.roleId;
    }
    return 0;
  }

  constructor(private router: Router,
              private globals: Globals,
              private sessionStorage: SessionStorageService,
              private authService: AuthService) {
  }

  ngOnInit(): void {
  }

}
