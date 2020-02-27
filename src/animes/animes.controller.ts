import { Body, Controller, Get, Post, Param, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateAnimeDto } from './dto/create-anime.dto';
import { AnimesService } from './animes.service';
import { EpisodesService } from '../episodes/episodes.service';

@Controller('animes')
export class AnimesController {
  constructor(
    private readonly animesService: AnimesService,
    private readonly episodesService: EpisodesService
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createAnimeDto: CreateAnimeDto): Promise<any> {
    const result = await this.animesService.insert(createAnimeDto);
    return result;
  }

  @Get()
  async getAll(@Query('page') page: number = 0, @Query('limit') limit: number = 12) {
    limit = limit > 100 ? 100 : limit;
    return await this.animesService.findAll({page, limit, route: 'https://id-anime.net/animes'});
  }

  @Get(':id')
  async getOne(@Param() id: number) {
    return await this.animesService.findOne(id);
  }

  @Get(':animeId/episodes')
  async getEpisodesByAnime(
    @Param() animeId,
    @Query('page') page: number = 0,
    @Query('limit') limit: number = 20
  ) {
    limit = limit > 100 ? 100 : limit;
    return await this.episodesService.findByAnime(animeId.animeId, {page, limit, route: `https://id-anime.net/animes/${animeId.animeId}/episodes`});
  }
}
