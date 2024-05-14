import { useState } from "react";

import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";

import Hulk from "../../assets/heroImages/hulk.svg";
import Wanda from "../../assets/heroImages/wanda.svg";
import Thanos from "../../assets/heroImages/thanos.svg";
import Spider from "../../assets/heroImages/spiderman.svg";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import {
  ButtonCard,
  ContainerCard,
  WrapperCardContainer,
  WrapperModal,
  WrapperModalButton,
} from "./styled";

import DetaileadModal, {
  IDetaileadModalProps,
} from "../../components/DetailedModal/DetaileadModal";

interface Character {
  title: string;
  description: string;
  image: string;
}

function Characters() {
  const [startIndex, setStartIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(true);
  const [selectedCharacterIndex, setSelectedCharacterIndex] = useState(0);

  const onNext = () => {
    setStartIndex((prevIndex) => prevIndex + 1);
  };

  const onPrevious = () => {
    setStartIndex((prevIndex) => prevIndex - 1);
  };

  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null
  );

  const openModal = (character: Character) => {
    setSelectedCharacter(character);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const nextCharacter = () => {
    const nextIndex =
      (selectedCharacterIndex + 1) % datasCharactersDetails.length;
    setSelectedCharacterIndex(nextIndex);
  };

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

  const datasCharactersDetails: IDetaileadModalProps[] = [
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
    },
    {
      image: Wanda,
      title: "Wand Maximoff",
      descriptions: "Descrições do Wand",
      whichMovie: ["Filme do Wand", "Filme do Wand", "Filme do Wand"],
      whichSaga: ["HasCharacter", "HasCharacter", "HasCharacter"],
      reviews: "Revisões do Wand",
      starsOrange: 2,
      starsGray: 3,
      andAcharacter: true,
      synopsisDescription: "",
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
    },
  ];

  return (
    <>
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
                image={character.image}
                onClick={() => openModal(character)}
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

      <>
        {modalOpen && (
          <WrapperModal>
            <DetaileadModal
              closeModal={closeModal}
              data={datasCharactersDetails[selectedCharacterIndex]}
            />
            <WrapperModalButton>
              <FaArrowRight onClick={nextCharacter} color="#FF0000" size={32} />
            </WrapperModalButton>
          </WrapperModal>
        )}
      </>
    </>
  );
}

export default Characters;
