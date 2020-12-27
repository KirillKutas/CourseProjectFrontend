import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-special-offers-slider',
  templateUrl: './special-offers-slider.component.html',
  styleUrls: ['./special-offers-slider.component.css']
})
export class SpecialOffersSliderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gameDetails(gameId): void {
    this.router.navigate(['/game/' + gameId]);
  }
}
