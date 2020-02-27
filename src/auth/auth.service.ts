import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthorsService } from '../authors/authors.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly authorService: AuthorsService,
    private readonly jwtService: JwtService
  ) {}

  async validateAuthor(username: string, password: string): Promise<any> {
    const isAuthorValid = await this.authorService.compareIdentity(username, password);
    return isAuthorValid;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
