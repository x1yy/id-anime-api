import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnimesService } from './animes.service';
import {EpisodesService } from '../episodes/episodes.service';
import { AnimesController } from './animes.controller';
import { Anime } from './anime.entity';
import { Episode } from '../episodes/episode.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Anime]),
    TypeOrmModule.forFeature([Episode])
  ],
  providers: [AnimesService, EpisodesService],
  controllers: [AnimesController]
})
export class AnimesModule {}
