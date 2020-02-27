import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthService } from '../auth/auth.service';
import { AuthorsService } from './authors.service';
import { AuthorsController } from './authors.controller';
import { Author } from './author.entity';
import { jwtConstants } from '../auth/constants';

@Module({
  imports: [
    TypeOrmModule.forFeature([Author]),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: jwtConstants.expiresIn },
    }),
  ],
  providers: [AuthorsService, AuthService],
  controllers: [AuthorsController],
  exports: [AuthorsService]
})
export class AuthorsModule {}
