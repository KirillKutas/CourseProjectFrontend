import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Game} from '../Shared/models/Game';
import {GamesService} from '../Core/Services/GamesService';
import {User} from "../Shared/models/User";
import {Genre} from "../Shared/models/Genre";
import {Category} from "../Shared/models/Category";
import {Comment} from "../Shared/models/Comment";

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {

  value: string;
  Game: Game;
  files: any[];
  Category: Category;

  freeToPlay = false;
  action = false;
  racing = false;
  strategy = false;
  sports = false;
  simulation = false;

  constructor(private route: ActivatedRoute,
              private gamesService: GamesService,
              private router: Router) {
    this.Category = {
      id: 0,
      name: '',
      games: null
    };
    this.Game = {
      id: '',
      gameName: '',
      price: 0,
      stringReleaseDate: '',
      releaseDate: null,
      developer: '',
      publisher: '',
      description: '',
      image: './assets/Images/NewUser.jpg',
      countOfBuy: 0,

      minSysReqOc: '',
      minSysReqProcessor: '',
      minSysReqRAM: '',
      minSysReqVideoCard: '',

      recSysReqOc: '',
      recSysReqProcessor: '',
      recSysReqRAM: '',
      recSysReqVideoCard: '',
      diskSpace: '',

      users: null,
      genres: null,
      categories: null,
      comments: null
    };
    this.route.params.subscribe(
      (param: any) => {
        this.value = param.id;
      });
    if (this.value !== 'new') {
      this.gamesService.GetGameById(this.value).subscribe(
        data => {
          this.Game = data;
          for (let item of this.Game.genres) {
            if (item.name === 'Free to play') {
              this.freeToPlay = true;
            }
            if (item.name === 'Action') {
              this.action = true;
            }
            if (item.name === 'Racing') {
              this.racing = true;
            }
            if (item.name === 'Strategy') {
              this.strategy = true;
            }
            if (item.name === 'Sports') {
              this.sports = true;
            }
            if (item.name === 'Simulation') {
              this.simulation = true;
            }
          }
          if (this.Game.categories.length !== 0) {
            this.Category.name = this.Game.categories[0].name;
          }
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  ngOnInit(): void {
  }

  checkPrice(): boolean {
    if (this.Game.price <= 0) {
      return false;
    }
    return true;
  }

  onFileChanged(event: any): void {
    this.files = event.target.files;
  }

  Save(): void {
    console.log('tut');
    const genres: Genre[] = [];
    if (this.freeToPlay === true) {
      const genre: Genre = {
        id: 1,
        name: 'Free to play',
        games: null
      };
      genres.push(genre);
    }
    if (this.action === true) {
      const genre: Genre = {
        id: 1,
        name: 'Action',
        games: null
      };
      genres.push(genre);
    }
    if (this.racing === true) {
      const genre: Genre = {
        id: 1,
        name: 'Racing',
        games: null
      };
      genres.push(genre);
    }
    if (this.strategy === true) {
      const genre: Genre = {
        id: 1,
        name: 'Strategy',
        games: null
      };
      genres.push(genre);
    }
    if (this.sports === true) {
      const genre: Genre = {
        id: 1,
        name: 'Sports',
        games: null
      };
      genres.push(genre);
    }
    if (this.simulation === true) {
      const genre: Genre = {
        id: 1,
        name: 'Simulation',
        games: null
      };
      genres.push(genre);
    }
    if (this.value === 'new') {
      console.log('tut1');
      const game: Game = {
        id: 'new',
        gameName: this.Game.gameName,
        price: this.Game.price,
        stringReleaseDate: '',
        releaseDate: this.Game.releaseDate,
        developer: this.Game.developer,
        publisher: this.Game.publisher,
        description: this.Game.description,
        image: this.Game.image,
        countOfBuy: 0,

        minSysReqOc: this.Game.minSysReqOc,
        minSysReqProcessor: this.Game.minSysReqProcessor,
        minSysReqRAM: this.Game.minSysReqRAM,
        minSysReqVideoCard: this.Game.minSysReqVideoCard,

        recSysReqOc: this.Game.recSysReqOc,
        recSysReqProcessor: this.Game.recSysReqProcessor,
        recSysReqRAM: this.Game.recSysReqRAM,
        recSysReqVideoCard: this.Game.recSysReqVideoCard,
        diskSpace: this.Game.diskSpace,

        users: null,
        genres: [],
        categories: [this.Category],
        comments: null
      };

      game.genres = genres;

      game.image = './assets/Images/NewUser.jpg';

      this.gamesService.AddGame(game).subscribe(
        data => {
          if (this.files !== undefined) {
            const formData = new FormData();
            formData.append('Image', this.files[0], this.files[0].name);
            formData.append('GameId', data.id);
            this.gamesService.UploadImage(formData).subscribe(
              data1 => {
                this.router.navigate(['/manageGame']);
              },
              error => {
                console.log(error);
              }
            );
          } else {
            this.router.navigate(['/manageGame']);
          }
        },
        error => {
          console.log(error);
        }
      );
    } else {
      this.Game.genres = genres;
      this.Game.categories = [this.Category];
      this.gamesService.UpdateGame(this.Game).subscribe(
        data => {
          if (this.files !== undefined) {
            const formData = new FormData();
            formData.append('Image', this.files[0], this.files[0].name);
            formData.append('GameId', this.Game.id);
            this.gamesService.UploadImage(formData).subscribe(
              data1 => {
                this.router.navigate(['/manageGame']);
              },
              error => {
                console.log(error);
              }
            );
          } else {
            this.router.navigate(['/manageGame']);
          }
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}
