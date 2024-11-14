import { Injectable } from '@nestjs/common';
import { UpdateAuthDto } from '../dto';
import { IRegisterUser } from '../interfaces';
import { AuthRepository } from '../repositories';
import { UserAlreadExistError, UserNotFoundError } from 'src/shared/errors';

@Injectable()
export class AuthService {
  constructor(private readonly authRepository: AuthRepository) {}
  async create(args: IRegisterUser) {
    const isUserExist = await this.authRepository.findOne({ where: { email: args.email } });
    if (isUserExist) {
      throw UserAlreadExistError()
    }
    return await this.authRepository.createOne(args);
  }
}
