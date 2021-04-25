export interface IAnime {
  name: string;
  description: string;
  ulrImg: string;
  evolutions?: IAnime[];
}
