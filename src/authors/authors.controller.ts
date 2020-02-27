import { Controller, Post, Request, Body, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthorsService } from './authors.service';
import { AuthService } from '../auth/auth.service';
import { LoginAuthorDto } from './login-author.dto';

@Controller('authors')
export class AuthorsController {
  constructor(
    private readonly authorsService: AuthorsService,
    private readonly authService: AuthService
  ) {}

  @UseGuards(AuthGuard('local'))
  @Post()
  async login(@Request() req) {
    console.log(req.user);
    return this.authService.login(req.user);
  }
}
