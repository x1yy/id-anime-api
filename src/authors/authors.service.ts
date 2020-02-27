import * as crypto from 'crypto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Author } from './author.entity';

@Injectable()
export class AuthorsService {
  constructor(
    @InjectRepository(Author)
    private readonly authorsRepository: Repository<Author>,
  ) {}

  async compareIdentity(username: string, password: string): Promise<Author> {
    let author = await this.authorsRepository.findOneOrFail({username: username, password: password});
    return author;
  }

  async generateToken() {

  }
}
