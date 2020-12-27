import {Game} from './Game';
import {Comment} from './Comment';

export class User {
  id: string;
  userName: string;
  /*userEmail: string;*/
  roleId: number;
  invoice: number;
  image: string;
  games: Game[];
  comments: Comment[];
}
