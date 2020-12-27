import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from './../../../../environments/environment.prod';
import {Observable} from 'rxjs';
import {SessionStorageService} from './SessionStorageService';
import {Game} from '../../Shared/models/Game';
import {CheckGame} from "../../Shared/models/CheckGame";
import {User} from "../../Shared/models/User";
import {AccountBoolResult} from "../../Shared/models/AccountBoolResult";
import {AccountImageResult} from "../../Shared/models/AccountImageResult";

@Injectable({providedIn: 'root'})

export class GamesService {
  private URl = `${environment.endpoint}/Games/`;

  constructor(
    private http: HttpClient,
    private sessionService: SessionStorageService
  ) {
  }

  GetRecommendedGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.URl + 'GetRecommendedGames');
  }

  GetGameById(Id: string): Observable<Game> {
    return this.http.get<Game>(this.URl + 'GetGameById?Id=' + Id);
  }

  SaveComment(UserId: string, GameId: string, Comment: string): Observable<Game> {
    const myHeaders = new HttpHeaders().set('Authorization', 'Bearer ' + this.sessionService.getToken());
    return this.http.post<Game>(this.URl + 'SaveComment', {UserId, GameId, Comment}, {headers: myHeaders});
  }

  UpdateComment(CommentId: string, GameId: string, Text: string): Observable<Game> {
    const myHeaders = new HttpHeaders().set('Authorization', 'Bearer ' + this.sessionService.getToken());
    return this.http.put<Game>(this.URl + 'UpdateComment', {CommentId, GameId, Text}, {headers: myHeaders});
  }

  DeleteComment(CommentId: string, GameId: string): Observable<Game> {
    const myHeaders = new HttpHeaders().set('Authorization', 'Bearer ' + this.sessionService.getToken());
    return this.http.delete<Game>(this.URl + 'DeleteComment?CommentId=' + CommentId + '&&GameId=' + GameId, {headers: myHeaders});
  }

  CheckGame(GameId: string, UserId: string): Observable<CheckGame> {
    const myHeaders = new HttpHeaders().set('Authorization', 'Bearer ' + this.sessionService.getToken());
    return this.http.get<CheckGame>(this.URl + 'CheckGame?GameId=' + GameId + '&&UserId=' + UserId, {headers: myHeaders});
  }

  GetMyGames(UserId: string): Observable<Game[]> {
    const myHeaders = new HttpHeaders().set('Authorization', 'Bearer ' + this.sessionService.getToken());
    return this.http.get<Game[]>(this.URl + 'GetMyGames?Id=' + UserId, {headers: myHeaders});
  }

  GetGamesByGenre(Genre: string): Observable<Game[]> {
    return this.http.get<Game[]>(this.URl + 'GetGamesByGenre?Genre=' + Genre);
  }

  GetGamesByCategory(Category: string): Observable<Game[]> {
    return this.http.get<Game[]>(this.URl + 'GetGamesByCategory?Category=' + Category);
  }

  GetGamesByCategoryAndCount(Category: string, Count: number): Observable<Game[]> {
    return this.http.get<Game[]>(this.URl + 'GetGamesByCategory?Category=' + Category + '&&Count=' + Count);
  }

  SearchGame(SearchString: string): Observable<Game[]> {
    return this.http.get<Game[]>(this.URl + 'Search?SearchString=' + SearchString);
  }

  BuyGame(UserId: string, GameId: string): Observable<AccountBoolResult> {
    const myHeaders = new HttpHeaders().set('Authorization', 'Bearer ' + this.sessionService.getToken());
    return this.http.post<AccountBoolResult>(this.URl + 'BuyGame', {UserId, GameId}, {headers: myHeaders});
  }

  GetAllGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.URl + 'GetAllGames');
  }

  AddGame(game: Game): Observable<Game> {
    const myHeaders = new HttpHeaders().set('Authorization', 'Bearer ' + this.sessionService.getToken());
    return this.http.post<Game>(this.URl + 'AddNewGame', {game}, {headers: myHeaders});
  }

  UploadImage(Image: FormData): Observable<AccountBoolResult> {
    const myHeaders = new HttpHeaders().set('Authorization', 'Bearer ' + this.sessionService.getToken());
    return this.http.post<AccountBoolResult>(this.URl + 'UploadImage', Image, {headers: myHeaders});
  }

  DeleteGame(GameId: string): Observable<Game[]> {
    const myHeaders = new HttpHeaders().set('Authorization', 'Bearer ' + this.sessionService.getToken());
    return this.http.post<Game[]>(this.URl + 'DeleteGame', {GameId}, {headers: myHeaders});
  }

  UpdateGame(game: Game): Observable<AccountBoolResult> {
    const myHeaders = new HttpHeaders().set('Authorization', 'Bearer ' + this.sessionService.getToken());
    return this.http.post<AccountBoolResult>(this.URl + 'UpdateGame', {game}, {headers: myHeaders});
  }

}
