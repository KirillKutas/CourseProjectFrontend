import {Component, OnInit} from '@angular/core';
import {Globals} from '../Shared/globals/globals';
import {SessionStorageService} from '../Core/Services/SessionStorageService';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {GamesService} from "../Core/Services/GamesService";
import {Game} from "../Shared/models/Game";

@Component({
  selector: 'app-my-games',
  templateUrl: './my-games.component.html',
  styleUrls: ['./my-games.component.css']
})
export class MyGamesComponent implements OnInit {

  games: Game[];

  constructor(private router: Router,
              private titleService: Title,
              private globals: Globals,
              private sessionStorage: SessionStorageService,
              private gamesService: GamesService) {
  }

  ngOnInit(): void {
    this.titleService.setTitle('My games page');
    if (this.globals.user == null && this.sessionStorage.getUser() == null) {
      this.router.navigate(['']);
    }

    const user = this.sessionStorage.getUser();
    this.gamesService.GetMyGames(user.id).subscribe(
      data => {
        this.games = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  gameDetails(gameId): void {
    this.router.navigate(['/game/' + gameId]);
  }

}
