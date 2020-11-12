import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})

export class CatalogComponent implements OnInit {

  searchString: string;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  search(): void {
    this.router.navigate(['/search']);
  }

}
