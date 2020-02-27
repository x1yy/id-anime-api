import { DynamicModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorsModule } from './authors/authors.module';
import { AuthModule } from './auth/auth.module';
import { EpisodesModule } from './episodes/episodes.module';
import { AnimesModule } from './animes/animes.module';

import * as ormconfig from './ormconfig';

export function DatabaseOrmModule(): DynamicModule {
  return TypeOrmModule.forRoot(ormconfig);
}

@Module({
  imports: [
    DatabaseOrmModule(),
    AuthorsModule,
    AuthModule,
    EpisodesModule,
    AnimesModule
  ],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule {}
