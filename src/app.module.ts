import { Module } from '@nestjs/common';
import { AnimeService } from './animes/anime.service';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [AppController],
  providers: [AnimeService],
})
export class AppModule {}
