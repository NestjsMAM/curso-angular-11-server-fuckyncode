import { IAnime } from './../interfaces/animes.interface';
export class Static {
  static readonly MEDABOTS: IAnime[] = [
    {
      name: 'Metabee',
      description:
        'es un Medarot Bípedo masculino cuyo primer número de serie es KBT-0. En el doblaje occidental, su número de serie es KBT-11220.',
      ulrImg: 'https://i.ibb.co/dPPLBpF/methabit.png',
    },
    {
      name: 'Rokusho',
      description:
        'Rokusho es un Medarot Bípedo masculino cuyo primer número de serie es KWG-0 . En el doblaje occidental, su número de serie es KWG-11237',
      ulrImg: 'https://i.ibb.co/4gPXg5W/Mugshot-Rokusho.png',
    },
    {
      name: 'Sumilidon ',
      description:
        'Es un medabot muy callado, casi nunca habla y solo lo hace cuando lo necesita o cuando debe decir algo importante',
      ulrImg: 'https://i.ibb.co/0jTvscN/sumilidon.jpg',
    },
  ];
  static readonly DIGIMONS: IAnime[] = [
    {
      name: 'Gabumon',
      description:
        'Gabumon tiene el aspecto de un reptil bípedo amarillo, con la panza azul con signos rosados. Lo más destacable de él es la capa de piel que siempre lleva encima, de color azul claro con rayas de azul oscuro, y garras fucsia, recordando a la piel de Garurumon. También el cuerno que lleva sobre la frente, amarillo con marcas rúnicas. Es de naturaleza tímida y nunca se dejará ver sin su piel.',
      ulrImg: 'https://i.ibb.co/Qfzh311/gabumon.png',
      evolutions: [
        {
          name: 'Garurumon',
          description: 'Garurumon es un Digimon Tipo Bestia',
          ulrImg: 'https://i.ibb.co/BjGWR6r/garurumon.jpg',
        },
      ],
    },
    {
      name: 'Biyomon',
      description:
        'Piyomon (Biyomon en Occidente) es un Digimon tipo Polluelo.',
      ulrImg: 'https://i.ibb.co/LPY9vzj/biyomon.jpg',
      evolutions: [
        {
          name: 'Birdramon',
          description:
            'Birdramon es un Digimon Tipo Ave Gigante, cuyo nombre y diseño son derivados de "Bird" (Ave en ingles). "Dra" (Dragón) y "Mon" (Abreviación de monstruo)',
          ulrImg: 'https://i.ibb.co/mBhtb7M/Birdramon.jpg',
        },
      ],
    },
    {
      name: 'Patamon',
      description:
        'Patamon es un Digimon Tipo Mamifero. Su nombre viene de la palabra japonesa patapata.',
      ulrImg: 'https://i.ibb.co/HxKcXH8/patamon.png',
      evolutions: [
        {
          name: 'Angemon',
          description:
            'Angemon es un Digimon Tipo Ángel, cuyo nombre y diseño vienen del Ángel, con la "l" omitida',
          ulrImg: 'https://i.ibb.co/NYjN1nW/angemon.png',
        },
      ],
    },
  ];
  static readonly POKEMONS: IAnime[] = [
    {
      name: 'Charmander',
      description:
        'Prefiere las cosas calientes. Dicen que cuando llueve le sale vapor de la punta de la cola.',
      ulrImg: 'https://i.ibb.co/XW4sY7p/Charmander.png',
      evolutions: [
        {
          name: 'Charmeleon',
          description:
            'Este Pokémon de naturaleza agresiva ataca en combate con su cola llameante y hace trizas al rival con sus afiladas garras.',
          ulrImg: 'https://i.ibb.co/x7PjwtZ/Charmeleon.png',
        },
        {
          name: 'Charizard',
          description:
            'Escupe un fuego tan caliente que funde las rocas. Causa incendios forestales sin querer.',
          ulrImg: 'https://i.ibb.co/G7qz00d/Charizard.png',
        },
      ],
    },
    {
      name: 'Bulbasaur',
      description:
        'Este Pokémon nace con una semilla en el lomo, que brota con el paso del tiempo.',
      ulrImg: 'https://i.ibb.co/jygGwdQ/Bulbasaur.png',
      evolutions: [
        {
          name: 'Ivysaur',
          description:
            'Cuando le crece bastante el bulbo del lomo, pierde la capacidad de erguirse sobre las patas traseras.',
          ulrImg: 'https://i.ibb.co/X5ZcMXk/Ivysaur.png',
        },
        {
          name: 'Venusaur',
          description:
            'La planta florece cuando absorbe energía solar, lo cual le obliga a buscar siempre la luz del sol.',
          ulrImg: 'https://i.ibb.co/LQBvj1c/Venusaur.png',
        },
      ],
    },
    {
      name: 'Squirtle',
      description:
        'Cuando retrae su largo cuello en el caparazón, dispara agua a una presión increíble.',
      ulrImg: 'https://i.ibb.co/YRNJx6X/Squirtle.png',
      evolutions: [
        {
          name: 'Wartortle',
          description:
            'Se lo considera un símbolo de longevidad. Los ejemplares más ancianos tienen musgo sobre el caparazón.',
          ulrImg: 'https://i.ibb.co/3h3NDGw/Wartortle.png',
        },
        {
          name: 'Blastoise',
          description:
            'Para acabar con su enemigo, lo aplasta con el peso de su cuerpo. En momentos de apuro, se esconde en el caparazón.',
          ulrImg: 'https://i.ibb.co/124p5N9/Blastoise.png',
        },
      ],
    },
  ];
}
