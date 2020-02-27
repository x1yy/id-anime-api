import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { paginate, Pagination, IPaginationOptions } from 'nestjs-typeorm-paginate-modified';
import { Anime } from './anime.entity';

@Injectable()
export class AnimesService {
  constructor(
    @InjectRepository(Anime)
    private readonly animesRepository: Repository<Anime>,
  ) {}

  async insert(anime: any): Promise<Anime> {
    let newAnime = new Anime();
    newAnime = anime;
    const result = await this.animesRepository.save(newAnime);
    return result;
  }

  async findAll(options: IPaginationOptions): Promise<Pagination<Anime>> {
    const qb = this.animesRepository.createQueryBuilder('anime');
    qb.orderBy('anime.id', 'DESC');
    return await paginate<Anime>(qb, options);
  }

  async findOne(id: number) {
    return await this.animesRepository.findOneOrFail(id);
  }
}
