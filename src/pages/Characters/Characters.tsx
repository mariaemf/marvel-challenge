import { useState } from "react";

import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";

import Hulk from "../../assets/heroImage/hulk.svg";
import Wanda from "../../assets/heroImage/wanda.svg";
import Thanos from "../../assets/heroImage/thanos.svg";
import Spider from "../../assets/heroImage/spiderman.svg";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import { ButtonCard, ContainerCard, WrapperCardContainer } from "./styled";

function Characters() {
  const characters = [
    {
      title: "Homem-Aranha",
      description:
        "Após ser mordido por uma aranha radioativa, Peter Parker se torna o amigo da vizinhança, o Homem-Aranha.",
      onClick: () => {},
      image: Spider,
    },
    {
      title: "Wand Maximoff",
      description:
        "Wanda Maximoff foi sequestrada da Sérvia e trazida para a Montanha Wundagore, base do Alto Evolucionário. ",
      onClick: () => {},
      image: Wanda,
    },
    {
      title: "Thanos",
      description:
        "A lua Titã era governada por Mentor (ALars), quando então reinava paz e tecnologia. Mentor tinha dois filhos: Eros e Thanos.",
      onClick: () => {},
      image: Thanos,
    },
    {
      title: "Hulk",
      description:
        "Na história original dos quadrinhos, o Hulk é um selvagem e poderoso alter ego do Dr. Robert Bruce Banner.",
      onClick: () => {},
      image: Hulk,
    },
  ];

  const [startIndex, setStartIndex] = useState(0);

  const onNext = () => {
    setStartIndex((prevIndex) => prevIndex + 1);
  };

  const onPrevious = () => {
    setStartIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <>
      <Header />
      <WrapperCardContainer>
        <ButtonCard onClick={onPrevious} disabled={startIndex === 0}>
          <FaArrowLeft color="#FF0000" size={32} />
        </ButtonCard>

        <ContainerCard>
          {characters
            .slice(startIndex, startIndex + 3)
            .map((character, index) => (
              <Card
                key={index}
                title={character.title}
                description={character.description}
                onClick={character.onClick}
                image={character.image}
              />
            ))}
          <ButtonCard
            onClick={onNext}
            disabled={startIndex >= characters.length - 3}
          >
            <FaArrowRight color="#FF0000" size={32} />
          </ButtonCard>
        </ContainerCard>
      </WrapperCardContainer>
    </>
  );
}

export default Characters;
