import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { ConfigurableModuleClass } from './config.module-definition';

@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule extends ConfigurableModuleClass {}
