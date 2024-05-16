import IronMan from "../../assets/movieImages/movieIronMan.svg";
import IronMan2 from "../../assets/movieImages/movieIronMan2.svg";
import Thor from "../../assets/movieImages/movieThor.svg";
import CaptainMarvel from "../../assets/movieImages/movieCaptainMarvel.svg";
import CaptainAmerica from "../../assets/movieImages/movieCaptainAmerica.svg";

import Netflix from "../../assets/shoppingImage/netflix.svg";
import Disney from "../../assets/shoppingImage/disney.svg";

import { DetaileadModal } from "../../types/detaileadModal";

export const moviesDetails: DetaileadModal[] = [
  {
    image: IronMan,
    title: "Homem de Ferro",
    reviews: "Crítica",
    starsOrange: 5,
    starsGray: 0,
    andAcharacter: false,
    synopsisDescription:
      "Tony Stark (Robert Downey Jr.) é um industrial bilionário, que também é um brilhante inventor, ao ser sequestrado, ele é obrigado a construir uma arma devastadora, mas ao invés disso, cria uma armadura capaz de mudar a história.",
    avaliableToPurchase: "Disponível em streaming:",
    placesToBuy: Netflix,
    additionalImage: Disney,
  },

  {
    image: IronMan2,
    title: "Homem de Ferro 2",
    reviews: "Crítica",
    starsOrange: 2,
    starsGray: 3,
    andAcharacter: false,
    synopsisDescription:
      "O mundo já sabe que o inventor bilionário Tony Stark (Robert Downey Jr.) é o super-herói blindado Homem de Ferro. Sofrendo pressão do governo, da mídia e do público para compartilhar sua tecnologia com as forças armadas",
    avaliableToPurchase: "Disponível em streaming:",

    placesToBuy: Disney,
  },
  {
    image: Thor,
    title: "Thor",
    reviews: "Crítica",
    starsOrange: 4,
    starsGray: 1,
    andAcharacter: false,
    synopsisDescription:
      "Quando é banido do reino de Asgard e exilado na Terra, o arrogante guerreiro Thor (Chris Hemsworth) é obrigado a lutar para reaver seus poderes perdidos. ",
    avaliableToPurchase: "Disponível em streaming:",
    placesToBuy: Netflix,
    additionalImage: Disney,
  },
  {
    image: CaptainAmerica,
    title: "Capitão América: O primeiro vingador",
    reviews: "Crítica",
    starsOrange: 5,
    starsGray: 0,
    andAcharacter: false,
    synopsisDescription:
      "Em Capitão América: O Primeiro Vingador, conhecemos a história de Steve Rogers (Chris Evans) e como ele se tornou o melhor soldado do mundo. ",
    avaliableToPurchase: "Disponível em streaming:",

    placesToBuy: Disney,
  },
  {
    image: CaptainMarvel,
    title: "Capitã Marvel",
    reviews: "Crítica",
    starsOrange: 3,
    starsGray: 2,
    andAcharacter: false,
    synopsisDescription:
      "Em Capitão América: O Primeiro Vingador, conhecemos a história de Steve Rogers (Chris Evans) e como ele se tornou o melhor soldado do mundo. ",
    avaliableToPurchase: "Disponível em streaming:",

    placesToBuy: Netflix,
    additionalImage: Disney,
  },
];
