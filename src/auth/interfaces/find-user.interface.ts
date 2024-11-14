import { IUser } from 'src/shared/interfaces';
import { TSelect } from 'src/shared/types/find.types';

export interface IFindOneUser extends Partial<Pick<IUser, 'id' | 'email'>> {
  id?: number;
  email: string;
}

export interface IFindOneArgsUser {
  where: IFindOneUser;
  select?: TSelect<IUser>;
}
