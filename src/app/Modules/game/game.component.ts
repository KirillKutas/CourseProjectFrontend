import {AfterViewInit, Component, NgZone, OnInit, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {SessionStorageService} from "../Core/Services/SessionStorageService";
import {Game} from "../Shared/models/Game";
import {GamesService} from "../Core/Services/GamesService";
import {CdkTextareaAutosize} from "@angular/cdk/text-field";
import {take} from "rxjs/operators";
import {User} from "../Shared/models/User";
import {NotificationService} from "../Core/Services/notification.service";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements AfterViewInit {
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  id: string;
  Game: Game;
  NewComment: string;
  UpdateComment: string;
  updateCommentFlag = false;
  stateFlag = false;

  triggerResize(): void {
    // Wait for changes to be applied, then trigger textarea resize.
    this.ngZone.onStable.pipe(take(1))
      .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  constructor(private route: ActivatedRoute,
              private sessionStorage: SessionStorageService,
              private gamesService: GamesService,
              private ngZone: NgZone,
              private snackBar: NotificationService) {
    this.route.params.subscribe(
      (param: any) => {
        this.id = param.id;
      });

    this.gamesService.GetGameById(this.id).subscribe(
      data => {
        this.Game = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  ngAfterViewInit(): void {
    const user = this.sessionStorage.getUser();
    if (user.userName !== null && this.Game !== undefined) {
      this.gamesService.CheckGame(this.Game.id, user.id).subscribe(
        data => {
          this.stateFlag = data.result;
        },
        error => {
          console.log(error);
          this.stateFlag = false;
        }
      );
      this.stateFlag = false;
    }
  }

  checkUser(): boolean {
    const user = this.sessionStorage.getUser();
    if (user === null) {
      return false;
    }
    return true;
  }

  saveComment(): void {
    if (this.NewComment === undefined || this.NewComment === '') {
      return;
    }
    const user = this.sessionStorage.getUser();
    this.gamesService.SaveComment(user.id, this.id, this.NewComment).subscribe(
      data => {
        this.Game.comments = data.comments;
      },
      error => {
        console.log(error);
      }
    );
    this.NewComment = '';
  }

  checkUserId(UserId: string): boolean {
    const user = this.sessionStorage.getUser();
    if (user === null) {
      return false;
    }
    if (UserId === this.sessionStorage.getUser().id) {
      return true;
    }
    return false;
  }

  OpenUpdateComment(Text: string): void {
    this.UpdateComment = Text;
    this.updateCommentFlag = true;
  }

  UpdateCommentFunction(CommentId: string): void {
    this.updateCommentFlag = false;
    this.gamesService.UpdateComment(CommentId, this.Game.id, this.UpdateComment).subscribe(
      data => {
        this.Game.comments = data.comments;
      },
      error => {
        console.log(error);
      }
    );
  }

  DeleteComment(CommentId: string): void {
    this.gamesService.DeleteComment(CommentId, this.Game.id).subscribe(
      data => {
        this.Game.comments = data.comments;
      },
      error => {
        console.log(error);
      }
    );
  }

  BuyGame(gameId: string, price: number): void {
    const user = this.sessionStorage.getUser();
    this.gamesService.BuyGame(user.id, gameId).subscribe(
      data => {
        if (data.result === true) {
          const invoice = this.sessionStorage.GetInvoice();
          this.sessionStorage.SaveInvoice(invoice - price);
          this.stateFlag = !this.stateFlag;
        } else {
          this.snackBar.openSnackBar('Insufficient funds');
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}
