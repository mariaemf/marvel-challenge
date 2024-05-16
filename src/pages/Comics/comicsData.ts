import ThorComics from "../../assets/hqsImages/thorHqs.svg";
import SilverSuferComics from "../../assets/hqsImages/silverSuferHqs.svg";
import WolwerineComics from "../../assets/hqsImages/wolverineHqs.svg";

import { Icard } from "../../types/card";

export const comics: Icard[] = [
  {
    title: "Thor: Vikings",
    description:
      "Garth Ennis e sua violência atacam novamente na HQ que leva a violência das histórias de Thor ao limite! Na minissérie de 2003 vemos vikings de um passado distante voltando a vida.",
    image: ThorComics,
  },
  {
    title: "Surfista Prateado : Parábola",
    description:
      "O único oponente do Devorador de Mundos é o herói que ele aprisionou na Terra: o Surfista Prateado, Galactus jurou não consumir o planeta, mas e se, em vez disso, ele transformar a civilização em seus adoradores?",
    image: SilverSuferComics,
  },
  {
    title: "Wolverine: Origens",
    description:
      "Origem é uma minissérie em quadrinhos publicada pela Marvel Comics em seis edições, entre 2001 e 2002. A história conta a revelação do passado do personagem Wolverine. ",
    image: WolwerineComics,
  },
];
