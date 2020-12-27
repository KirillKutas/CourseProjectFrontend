import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {GamesService} from "../../Core/Services/GamesService";
import {Game} from "../../Shared/models/Game";
import {Genre} from "../../Shared/models/Genre";

@Component({
  selector: 'app-catalog-content',
  templateUrl: './catalog-content.component.html',
  styleUrls: ['./catalog-content.component.css']
})
export class CatalogContentComponent implements OnInit, OnChanges {

  @Input() category: string;
  @Input() update: boolean;

  img: string;
  gameName: string;
  gameGenre: Genre[];
  gameId: string;

  Games: Game[];


  constructor(private router: Router,
              private gamesService: GamesService) {
  }

  ngOnInit(): void {
    //this.getData();
  }
  ngOnChanges(): void {
    this.getData();
  }

  getData(): void {
    this.gamesService.GetGamesByCategoryAndCount(this.category, 10).subscribe(
      data => {
        this.Games = data;
        this.update = false;
      },
      error => {
        console.log(error);
      }
    );
  }

  changeSelectRow(img: string, name: string, genre: Genre[], id: string): void {
    this.img = img;
    this.gameName = name;
    this.gameGenre = genre;
    this.gameId = id;
  }

  ShowAll(): void {
    this.router.navigate(['/category/' + this.category]);
  }

  gameDetails(gameId): void {
    this.router.navigate(['/game/' + gameId]);
  }

}
