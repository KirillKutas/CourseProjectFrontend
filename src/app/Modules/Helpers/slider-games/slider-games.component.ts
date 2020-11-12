import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-slider-games',
  templateUrl: './slider-games.component.html',
  styleUrls: ['./slider-games.component.css']
})
export class SliderGamesComponent implements OnInit {

  img: object;
  imgs: object[];
  id: number[] = [1, 2, 3];
  links: string[] = ['./assets/Images/1.jpg', './assets/Images/2.jpg', './assets/Images/3.jpg'];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.img = {id: 1, link: './assets/Images/1.jpg'};
    this.imgs[0] = this.img;
    this.img = {id: 2, link: './assets/Images/2.jpg'};
    this.imgs[1] = this.img;
    this.img = {id: 3, link: './assets/Images/3.jpg'};
    this.imgs[2] = this.img;
  }

  gameDetails(gameId): void {
    this.router.navigate(['/game/' + gameId]);
  }

}
