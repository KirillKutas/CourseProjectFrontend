import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from "@angular/platform-browser";
import {Game} from "../Shared/models/Game";
import {GamesService} from "../Core/Services/GamesService";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  value: string;
  games: Game[];
  loader: boolean;

  private querySubscription: Subscription;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private titleService: Title,
              private gamesService: GamesService) { }

  ngOnInit(): void {
    this.loader = false;
    this.querySubscription = this.route.params.subscribe(
      (param: any) => {
        this.value = param['value'];
      });
    this.titleService.setTitle(this.value + ' category page');

    this.gamesService.GetGamesByCategory(this.value).subscribe(
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
