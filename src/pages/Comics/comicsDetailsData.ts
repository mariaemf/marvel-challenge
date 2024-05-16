import ThorComics from "../../assets/hqsImages/thorHqs.svg";
import SilverSurferComics from "../../assets/hqsImages/silverSuferHqs.svg";
import WolverineComics from "../../assets/hqsImages/wolverineHqs.svg";
import americanas from "../../assets/shoppingImage/americanas.svg";
import amazon from "../../assets/shoppingImage/amazon.svg";

import { DetaileadModal } from "../../types/detaileadModal";

export const datasComicsDetails: DetaileadModal[] = [
  {
    image: ThorComics,
    title: "Thor: Vikings",
    reviews: "Crítica",
    starsOrange: 5,
    starsGray: 0,
    andAcharacter: false,
    synopsisDescription:
      "Garth Ennis e sua violência atacam novamente na HQ que leva a violência das histórias de Thor ao limite! Na minissérie de 2003 vemos vikings de um passado distante voltando a vida.",
    placesToBuy: americanas,
    additionalImage: amazon,
  },
  {
    image: SilverSurferComics,
    title: "Surfista Prateado: Parábola",

    reviews: "Crítica",
    starsOrange: 3,
    starsGray: 2,
    andAcharacter: false,
    synopsisDescription:
      "O único oponente do Devorador de Mundos é o herói que ele aprisionou na Terra: o Surfista Prateado, Galactus jurou não consumir o planeta, mas e se, em vez disso, ele transformar a civilização em seus adoradores?",
    placesToBuy: americanas,
  },
  {
    image: WolverineComics,
    title: "Wolverine: Origens",
    reviews: "Crítica",
    starsOrange: 4,
    starsGray: 1,
    andAcharacter: false,
    synopsisDescription:
      "Origem é uma minissérie em quadrinhos publicada pela Marvel Comics em seis edições, entre 2001 e 2002. A história conta a revelação do passado do personagem Wolverine. ",
    placesToBuy: americanas,
    additionalImage: amazon,
  },
];
