import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Episode } from '../episodes/episode.entity';

@Entity()
export class Anime {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('mediumtext')
  title: string;

  @Column('longtext')
  synopsis: string;

  @Column('varchar', { length: 160 })
  metaDescription: string;

  @Column('mediumtext')
  coverLink: string;

  @OneToMany(type => Episode, episode => episode.anime)
  episodes: Episode[];
}
