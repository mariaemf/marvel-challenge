import { useState } from "react";
import { comics } from "./comicsData";
import { FaArrowRight } from "react-icons/fa";
import Card from "../../components/Card/Card";
import {
  ContainerCard,
  WrapperCardContainer,
  WrapperModal,
  WrapperModalButton,
} from "../../components/Layout/GlobalStyled";
import { datasComicsDetails } from "./comicsDetailsData";
import DetaileadModal from "../../components/DetailedModal/DetaileadModal";

function Comics() {
  const [startIndex, setStartIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedComicsIndex, setSelectedComicsIndex] = useState<number | null>(
    null
  );

  const openModal = (index: number) => {
    setSelectedComicsIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const nextComics = () => {
    const nextIndex =
      ((selectedComicsIndex ?? -1) + 1) % datasComicsDetails.length;
    setSelectedComicsIndex(nextIndex);
    if (nextIndex === 0) {
      closeModal();
    }
  };

  return (
    <>
      <WrapperCardContainer>
        <ContainerCard>
          {comics.slice(startIndex, startIndex + 3).map((comics, index) => (
            <Card
              key={index}
              title={comics.title}
              description={comics.description}
              image={comics.image}
              onClick={() => openModal(index + startIndex)}
            />
          ))}
        </ContainerCard>
      </WrapperCardContainer>

      <>
        {modalOpen && (
          <WrapperModal>
            <DetaileadModal
              closeModal={closeModal}
              data={datasComicsDetails[selectedComicsIndex ?? 0]}
            />
            <WrapperModalButton>
              <FaArrowRight onClick={nextComics} color="#FF0000" size={32} />
            </WrapperModalButton>
          </WrapperModal>
        )}
      </>
    </>
  );
}

export default Comics;
