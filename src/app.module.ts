import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { Prisma, SharedModule } from './shared/shared.module';


@Module({
  imports: [
    Prisma.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UserModule,
    SharedModule,
    RouterModule.register([
      {
        path: '/api',
        module: AppModule,
      }, {
        path: '/api',
        children: [
          {
            path: '/',
            module: AuthModule
          },
          {
            path: '/',
            module: UserModule
          }
        ]
      }
    ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
