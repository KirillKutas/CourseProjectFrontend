import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog-tabs',
  templateUrl: './catalog-tabs.component.html',
  styleUrls: ['./catalog-tabs.component.css']
})
export class CatalogTabsComponent implements OnInit {

  category: string;
  firstButton = true;
  update: boolean;

  constructor() { }

  ngOnInit(): void {
    this.category = 'TopSellers';
  }

}
