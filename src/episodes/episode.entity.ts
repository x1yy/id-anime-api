import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Anime } from '../animes/anime.entity';

@Entity()
export class Episode {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('mediumtext')
  link: string;

  @Column('int')
  episode: number;

  @Column('mediumtext')
  title: string;

  @Column('longtext')
  synopsis: string;

  @ManyToOne(type => Anime, anime => anime.episodes)
  anime: Anime;
}
