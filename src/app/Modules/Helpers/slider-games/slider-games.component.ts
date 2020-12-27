import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {GamesService} from '../../Core/Services/GamesService';
import {Game} from "../../Shared/models/Game";


@Component({
  selector: 'app-slider-games',
  templateUrl: './slider-games.component.html',
  styleUrls: ['./slider-games.component.css']
})
export class SliderGamesComponent implements OnInit {

  Data: Game[];
  date: Date;
  loader: boolean;

  constructor(private router: Router,
              private gameService: GamesService) {
    this.loader = false;
    this.gameService.GetRecommendedGames().subscribe(
      data => {
        this.Data = data;
        this.loader = true;
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
  }

  gameDetails(gameId): void {
    this.router.navigate(['/game/' + gameId]);
  }
}
