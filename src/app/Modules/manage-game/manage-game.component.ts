import {Component, OnInit} from '@angular/core';
import {SessionStorageService} from "../Core/Services/SessionStorageService";
import {Router} from "@angular/router";
import {Game} from "../Shared/models/Game";
import {GamesService} from "../Core/Services/GamesService";

@Component({
  selector: 'app-manage-game',
  templateUrl: './manage-game.component.html',
  styleUrls: ['./manage-game.component.css']
})
export class ManageGameComponent implements OnInit {

  Games: Game[];

  constructor(private sessionService: SessionStorageService,
              private router: Router,
              private gamesService: GamesService) {
    if (this.sessionService.getUser().roleId !== 1) {
      this.router.navigate(['']);
    }

    this.gamesService.GetAllGames().subscribe(
      data => {
        this.Games = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  AddNew(id: string): void {
    this.router.navigate(['/addGame/' + id]);
  }

  Update(id: string): void {
    this.router.navigate(['/addGame/' + id]);
  }

  ngOnInit(): void {
  }

  Delete(id: string): void {
    this.gamesService.DeleteGame(id).subscribe(
      data => {
        this.Games = data;
      },
      error => {
        console.log(error);
      }
    );
  }

}
