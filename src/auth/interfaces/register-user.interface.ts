import { IUser } from 'src/shared/interfaces';
import { TSelect } from 'src/shared/types/find.types';

export type IRegisterUser = Pick<
  IUser,
  | 'firstName'
  | 'lastName'
  | 'email'
  | 'password'
  | 'phone'
  | 'address'
  | 'city'
  | 'state'
  | 'role'
>;

export interface IRegisterUserArgs<T> {
  data: T;
  select?: TSelect<IUser>;
}
