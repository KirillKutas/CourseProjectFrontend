import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Title} from '@angular/platform-browser';
import {Router} from '@angular/router';
import {RegistrationService} from '../Core/Services/registration.service';
import {SessionStorageService} from '../Core/Services/SessionStorageService';
import {NotificationService} from '../Core/Services/notification.service';
import {Globals} from '../Shared/globals/globals';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;
  loading: boolean;
  hide: boolean;

  constructor(private router: Router,
              private titleService: Title,
              private registrationService: RegistrationService,
              private sessionStorage: SessionStorageService,
              private notificationService: NotificationService,
              private globals: Globals) { }

  ngOnInit(): void {
    this.titleService.setTitle('Registration page');
    this.createForm();
  }

  private createForm(): void {
    const savedUsername = localStorage.getItem('savedUsername');

    this.registrationForm = new FormGroup({
      username: new FormControl(savedUsername, [Validators.required]),
      password: new FormControl('', Validators.required),
    });
    this.hide = true;
  }
  register(): void {
    const username = this.registrationForm.get('username').value;
    const password = this.registrationForm.get('password').value;

    this.loading = true;
    this.registrationService.registration(username, password).subscribe(
      data => {
        this.globals.user = data;
        this.router.navigate(['/login']);
      },
      err => {
        this.notificationService.openSnackBar(err.error.message);
        this.loading = false;
      });
  }
}
