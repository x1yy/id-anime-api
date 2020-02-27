import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateEpisodeDto } from './dto/create-episode.dto';
import { EpisodesService } from './episodes.service';

@Controller('episodes')
export class EpisodesController {
  constructor(
    private readonly episodesService: EpisodesService
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createEpisodeDto: CreateEpisodeDto): Promise<any> {
    return await this.episodesService.insert(createEpisodeDto);
  }

  @Get(':id')
  async getOne(@Param() id: number) {
    return await this.episodesService.findOne(id);
  }
}
