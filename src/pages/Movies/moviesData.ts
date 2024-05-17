import IronMan from "../../assets/movieImages/movieIronMan.svg";
import IronMan2 from "../../assets/movieImages/movieIronMan2.svg";
import Thor from "../../assets/movieImages/movieThor.svg";
import CaptainMarvel from "../../assets/movieImages/movieCaptainMarvel.svg";
import CaptainAmerica from "../../assets/movieImages/movieCaptainAmerica.svg";

export const movies = [
  {
    title: "Homem de Ferro",
    description:
      "Tony Stark é um industrial bilionário, que também é um brilhante inventor, ao ser sequestrado, ele é obrigado a construir uma arma devastadora.",
    image: IronMan,
    lancamento: 2008,
    cronologia: 1,
  },
  {
    title: "Homem de Ferro 2",
    description:
      "O mundo já sabe que o inventor bilionário Tony Stark (Robert Downey Jr.) é o super-herói blindado Homem de Ferro.",
    image: IronMan2,
    lancamento: 2013,
    cronologia: 3,
  },
  {
    title: "Thor",
    description:
      "Quando é banido do reino de Asgard e exilado na Terra, o arrogante guerreiro Thor é obrigado a lutar para reaver seus poderes perdidos.",
    image: Thor,
    lancamento: 2011,
    cronologia: 4,
  },
  {
    title: "Capitão América",
    description:
      "Em Capitão América: O Primeiro Vingador, conhecemos a história de Steve Rogers e como ele se tornou o melhor soldado do mundo.",
    image: CaptainAmerica,
    lancamento: 2007,
    cronologia: 2,
  },
  {
    title: "Capitã Marvel",
    description:
      "Capitã Marvel, parte do exército de elite dos Kree, uma raça alienígena, encontra-se no meio de uma batalha entre seu povo e os Skrulls.",
    image: CaptainMarvel,
    lancamento: 2019,
    cronologia: 5,
  },
];
