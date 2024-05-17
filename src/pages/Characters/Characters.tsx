import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import {
  ButtonCard,
  ContainerCard,
  WrapperButtonCard,
  WrapperCardContainer,
  WrapperModal,
  WrapperModalButton,
} from "./styled";
import DetaileadModal from "../../components/DetailedModal/DetaileadModal";

import { characters } from "./charactersData";
import { datasCharactersDetails } from "./charactersDetailsData";

function Characters() {
  const [startIndex, setStartIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCharacterIndex, setSelectedCharacterIndex] = useState(null);

  const onNext = () => {
    setStartIndex((prevIndex) => prevIndex + 1);
  };

  const onPrevious = () => {
    setStartIndex((prevIndex) => prevIndex - 1);
  };

  const openModal = (index) => {
    setSelectedCharacterIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const nextCharacter = () => {
    const nextIndex =
      ((selectedCharacterIndex ?? -1) + 1) % datasCharactersDetails.length;
    setSelectedCharacterIndex(nextIndex);
    if (nextIndex === 0) {
      closeModal();
    }
  };

  return (
    <>
      <WrapperCardContainer>
        <ContainerCard>
          {characters
            .slice(startIndex, startIndex + 3)
            .map((character, index) => (
              <Card
                key={index}
                title={character.title}
                description={character.description}
                image={character.image}
                onClick={() => openModal(index + startIndex)}
              />
            ))}
        </ContainerCard>
      </WrapperCardContainer>
      <WrapperButtonCard>
        <ButtonCard onClick={onPrevious} disabled={startIndex === 0}>
          <FaArrowLeft color="#FF0000" size={42} />
        </ButtonCard>
        <ButtonCard
          onClick={onNext}
          disabled={startIndex >= characters.length - 3}
        >
          <FaArrowRight color="#FF0000" size={42} />
        </ButtonCard>
      </WrapperButtonCard>
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
