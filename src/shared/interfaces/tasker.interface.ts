import { IUser } from "./user.interface";

export interface ITasker {
  id: number;
  userId: number;
  skills: string[];
  availability: string;
  user?: IUser;
}