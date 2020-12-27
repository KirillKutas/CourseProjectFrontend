import {Component, OnChanges, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {GamesService} from "../Core/Services/GamesService";
import {Game} from "../Shared/models/Game";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnChanges {

  searchString: string;
  Games: Game[];

  private querySubscription: Subscription;

  constructor(private route: ActivatedRoute,
              private titleService: Title,
              private gameService: GamesService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.querySubscription = this.route.params.subscribe(
      (param: any) => {
        this.searchString = param['searchString'];
      });
    this.titleService.setTitle('Search page');
    this.GetGames();
  }

  ngOnChanges(): void {
  }

  GetGames(): void {
    this.gameService.SearchGame(this.searchString).subscribe(
      data => {
        this.Games = data;
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
