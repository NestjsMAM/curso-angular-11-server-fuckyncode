import { Injectable } from '@nestjs/common';
import { IAnime } from '../common/model/interfaces/animes.interface';
import { Static } from '../common/model/static/static';
import { TypeAnime } from '../common/model/types';

@Injectable()
export class AnimeService {
  getAnime(type: TypeAnime): IAnime[] {
    switch (type) {
      case 'digimon':
        return Static.DIGIMONS;
      case 'medabot':
        return Static.MEDABOTS;
      case 'pokemon':
        return Static.POKEMONS;
      default:
        return [];
    }
  }
}
