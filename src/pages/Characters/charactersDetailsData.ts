import Hulk from "../../assets/heroImages/hulk.svg";
import Wanda from "../../assets/heroImages/wanda.svg";
import Thanos from "../../assets/heroImages/thanos.svg";
import Spider from "../../assets/heroImages/spiderman.svg";
import { DetaileadModal } from "../../types/detaileadModal";

export const datasCharactersDetails: DetaileadModal[] = [
  {
    image: Spider,
    title: "Homem-Aranha",
    descriptions: "Descrições do Homem-Aranha",
    whichMovie: ["Vingadores", "Filme do Homem-Aranha"],
    whichSaga: ["Guardiões da Galáxia", "HasCharacter"],
    reviews: "Revisões do Homem-Aranha",
    starsOrange: 4,
    starsGray: 1,
    andAcharacter: true,
    synopsisDescription: "",
    placesToBuy: "",
  },
  {
    image: Wanda,
    title: "Wanda Maximoff",
    descriptions: "Descrições do Wanda",
    whichMovie: ["Filme do Wanda", "Filme do Wanda", "Filme do Wanda"],
    whichSaga: ["HasCharacter", "HasCharacter", "HasCharacter"],
    reviews: "Revisões do Wanda",
    starsOrange: 2,
    starsGray: 3,
    andAcharacter: true,
    synopsisDescription: "",
    placesToBuy: "",
  },
  {
    image: Thanos,
    title: "Thanos",
    descriptions: "Descrições do Thanos",
    whichMovie: ["Vingadores", "Filme do Thanos"],
    whichSaga: ["Guardiões da Galáxia", "HasCharacter"],
    reviews: "Revisões do Thanos",
    starsOrange: 5,
    starsGray: 0,
    andAcharacter: true,
    synopsisDescription: "",
    placesToBuy: "",
  },
  {
    image: Hulk,
    title: "Hulk",
    descriptions: "Descrições do Hulk",
    whichMovie: ["Vingadores", "Filme do Hulk"],
    whichSaga: ["Guardiões da Galáxia", "HasCharacter"],
    reviews: "Revisões do Hulk",
    starsOrange: 5,
    starsGray: 0,
    andAcharacter: true,
    synopsisDescription: "",
    placesToBuy: "",
  },
];
