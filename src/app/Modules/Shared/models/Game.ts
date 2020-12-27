import {User} from "./User";
import {Genre} from "./Genre";
import {Category} from "./Category";
import {Comment} from './Comment';

export class Game {
  id: string;
  gameName: string;
  price: number;
  stringReleaseDate: string;
  releaseDate: Date;
  developer: string;
  publisher: string;
  description: string;
  image: string;
  countOfBuy: number;

  minSysReqOc: string;
  minSysReqProcessor: string;
  minSysReqRAM: string;
  minSysReqVideoCard: string;

  recSysReqOc: string;
  recSysReqProcessor: string;
  recSysReqRAM: string;
  recSysReqVideoCard: string;
  diskSpace: string;

  users: User[];
  genres: Genre[];
  categories: Category[];
  comments: Comment[];
}
