import { Role } from '@prisma/client';
import { ITasker } from './tasker.interface';


export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone?: string;
  address?: string;
  city: string;
  state: string;
  role: Role;
  createdAt?: Date;
  updatedAt?: Date;
  tasker?: ITasker;
  deleted?: boolean;
}
