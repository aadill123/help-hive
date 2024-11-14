import { Injectable } from '@nestjs/common';

import { PrismaService } from '@helphive/prisma';
import { IFindOneArgsUser, IRegisterUser } from '../interfaces';
import { IUser } from 'src/shared/interfaces';

@Injectable()
export class AuthRepository {
  constructor(private readonly prisma: PrismaService) {}
  async createOne(data: IRegisterUser) {
    await this.prisma.user.create({
      data
    });
  }

  async findOne(args: IFindOneArgsUser):Promise<IUser | null>{
    return this.prisma.user.findFirst(args)
  } 
}
