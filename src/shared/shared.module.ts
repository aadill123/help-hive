import { Module } from '@nestjs/common';
import { DatabaseService } from './services/database/database.service';
import { ConfigurableModuleClass } from './config.module-definition';

@Module({
  exports: [],
  providers: []
})
export class SharedModule { }

@Module({
  exports: [DatabaseService],
  providers: [DatabaseService]
})
export class Prisma extends ConfigurableModuleClass { }
