import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EpisodesService } from './episodes.service';
import { EpisodesController } from './episodes.controller';
import { Episode } from './episode.entity';
import { Anime } from '../animes/anime.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Episode]),
    TypeOrmModule.forFeature([Anime])
  ],
  providers: [EpisodesService],
  controllers: [EpisodesController]
})
export class EpisodesModule {}
