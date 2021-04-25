import {
  Controller,
  Get,
  Param,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AnimeService } from './animes/anime.service';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth-guard.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { IRSLogin } from './common/model/interfaces/auth.interface';
import { TypeAnime } from './common/model/types';

@Controller('fuckyncode')
export class AppController {
  constructor(private authService: AuthService, private anime: AnimeService) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  login(@Request() req) {
    const userValidate = req.user as IRSLogin;
    return this.authService.login(userValidate);
  }

  @UseGuards(JwtAuthGuard)
  @Get('anime/:type')
  getAnime(@Param('type') type: TypeAnime) {
    return this.anime.getAnime(type);
  }
}
