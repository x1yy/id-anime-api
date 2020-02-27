import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { paginate, Pagination, IPaginationOptions } from 'nestjs-typeorm-paginate-modified';
import { Anime } from '../animes/anime.entity';
import { Episode } from './episode.entity';

@Injectable()
export class EpisodesService {
  constructor(
    @InjectRepository(Episode)
    private readonly episodesRepository: Repository<Episode>,
    @InjectRepository(Anime)
    private readonly animesRepository: Repository<Anime>
  ) {}

  async insert(episode: any): Promise<Episode> {
    let anime = await this.animesRepository.findOne(episode.animeId)
    let newEpisode = new Episode();
    newEpisode = episode;
    newEpisode.anime = anime;
    const result = await this.episodesRepository.save(newEpisode);
    return result;
  }

  async findByAnime(animeId: number, options: IPaginationOptions): Promise<Pagination<Episode>> {
    const qb = this.episodesRepository.createQueryBuilder('e');
    qb.where('e.animeId = :animeId', { animeId: animeId }).getMany();
    return await paginate<Episode>(qb, options);
  }

  async findOne(id: number) {
    return await this.episodesRepository.findOneOrFail(id);
  }
}
