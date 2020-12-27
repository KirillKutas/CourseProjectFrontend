import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {Title} from "@angular/platform-browser";
import {GamesService} from "../Core/Services/GamesService";
import {Game} from "../Shared/models/Game";

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

  value: string;
  games: Game[];
  loader: boolean;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private titleService: Title,
              private gamesService: GamesService) {

  }

  ngOnInit(): void {
    this.loader = false;
    this.route.params.subscribe(
      (param: any) => {
        this.value = param['value'];
      });
    this.titleService.setTitle(this.value + ' genre page');

    this.gamesService.GetGamesByGenre(this.value).subscribe(
      data => {
        this.games = data;
        this.loader = true;
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
