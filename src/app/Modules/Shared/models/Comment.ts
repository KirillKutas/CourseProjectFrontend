import {User} from "./User";
import {Game} from "./Game";

export class Comment{
  id: string;
  text: string;
  user: User;
  game: Game;
  publicationDate: Date;
  stringPublicationDate: string;
}
