import {Component, NgZone, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {CdkTextareaAutosize} from "@angular/cdk/text-field";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})

export class CatalogComponent implements OnInit {
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  triggerResize(): void {
    // Wait for changes to be applied, then trigger textarea resize.
    this.ngZone.onStable.pipe(take(1))
      .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  constructor(private router: Router,
              private titleService: Title,
              private ngZone: NgZone) {
  }

  ngOnInit(): void {
    this.titleService.setTitle('Catalog page');
  }

}
