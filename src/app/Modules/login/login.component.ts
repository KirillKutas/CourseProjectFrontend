import {Component, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Title} from '@angular/platform-browser';
import {AuthService} from '../Core/Services/auth.service';
import {SessionStorageService} from '../Core/Services/SessionStorageService';
import {Globals} from '../Shared/globals/globals';
import {NotificationService} from '../Core/Services/notification.service';
import {Router} from '@angular/router';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading: boolean;
  hide: boolean;

  constructor(private router: Router,
              private titleService: Title,
              private authService: AuthService,
              private sessionStorage: SessionStorageService,
              private notificationService: NotificationService,
              private globals: Globals) { }

  ngOnInit(): void {
    this.titleService.setTitle('Login page');
    this.createForm();
  }
  private createForm(): void {
    const savedUsername = localStorage.getItem('savedUsername');

    this.loginForm = new FormGroup({
      username: new FormControl(savedUsername, [Validators.required]),
      password: new FormControl('', Validators.required),
      rememberMe: new FormControl(savedUsername !== null)
    });
    this.hide = true;
  }
  login(): void {
    const username = this.loginForm.get('username').value;
    const password = this.loginForm.get('password').value;
    const rememberMe = this.loginForm.get('rememberMe').value;

    this.loading = true;
    this.authService.login(username, password).subscribe(
      data => {
        if (rememberMe) {
          localStorage.setItem('savedUsername', username);
          this.sessionStorage.saveToken(data.token);
          this.sessionStorage.saveUser(data);
          this.sessionStorage.SaveInvoice(data.invoice);
        } else {
          this.globals.user = data;
          localStorage.removeItem('savedUsername');
        }
        this.router.navigate(['']);
      },
      err => {
        this.notificationService.openSnackBar(err.error.message);
        this.loading = false;
      });
  }
  resetPassword(): void {
    // todo
  }

}
