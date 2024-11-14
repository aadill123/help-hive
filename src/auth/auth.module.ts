import { Module } from '@nestjs/common';
import { AuthService } from './services';
import { AuthController } from './controller/auth.controller';
import { AuthRepository } from './repositories';

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [AuthService, AuthRepository],
})
export class AuthModule {}
