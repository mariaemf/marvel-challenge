import { useState } from "react";
import Card from "../../components/Card/Card";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import {
  ButtonCard,
  ContainerCard,
  WrapperCardContainer,
  WrapperModal,
  WrapperModalButton,
} from "./styled";
import DetaileadModal from "../../components/DetailedModal/DetaileadModal";

import { characters } from "./charactersData";
import { datasCharactersDetails } from "./charactersDetailsData";
import { Icard } from "../../types/card";

function Characters() {
  const [startIndex, setStartIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCharacterIndex, setSelectedCharacterIndex] = useState(0);
  const [selectedCharacter, setSelectedCharacter] = useState<Icard | null>(
    null
  );

  const onNext = () => {
    setStartIndex((prevIndex) => prevIndex + 1);
  };

  const onPrevious = () => {
    setStartIndex((prevIndex) => prevIndex - 1);
  };

  const openModal = (character: Icard) => {
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
