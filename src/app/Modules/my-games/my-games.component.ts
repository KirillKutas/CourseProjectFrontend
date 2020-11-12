import {Component, OnInit} from '@angular/core';
import {Globals} from '../Shared/globals/globals';
import {SessionStorageService} from '../Core/Services/SessionStorageService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-my-games',
  templateUrl: './my-games.component.html',
  styleUrls: ['./my-games.component.css']
})
export class MyGamesComponent implements OnInit {

  constructor(private router: Router,
              private globals: Globals,
              private sessionStorage: SessionStorageService) {
  }

  ngOnInit(): void {
    if (this.globals.user == null && this.sessionStorage.getUser() == null) {
      this.router.navigate(['']);
    }
  }

}
