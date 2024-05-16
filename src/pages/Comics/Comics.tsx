import { FaArrowRight } from "react-icons/fa";
import { WrapperModal, WrapperModalButton } from "../Characters/styled";
import {
  ContainerCardMovies,
  WrapperCardContainerMovies,
} from "../Movies/styled";
import Card from "../../components/Card/Card";
import DetaileadModal from "../../components/DetailedModal/DetaileadModal";
import { useState } from "react";
import { comics } from "./comicsData";
import { datasComicsDetails } from "./comicsDetailsData";

function Comics() {
  const [startIndex, setStartIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedComicsIndex, setSelectedComicsIndex] = useState(null);

  const openModal = (index) => {
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
      <WrapperCardContainerMovies>
        <ContainerCardMovies>
          {comics.slice(startIndex, startIndex + 3).map((comics, index) => (
            <Card
              key={index}
              title={comics.title}
              description={comics.description}
              image={comics.image}
              onClick={() => openModal(index + startIndex)}
            />
          ))}
        </ContainerCardMovies>
      </WrapperCardContainerMovies>

      <>
        {modalOpen && (
          <WrapperModal>
            <DetaileadModal
              closeModal={closeModal}
              data={datasComicsDetails[selectedComicsIndex]}
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
