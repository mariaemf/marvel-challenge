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
import { DetailedComics } from "../../types/comics";
import { Icard } from "../../types/card";

function Comics() {
  const [startIndex, setStartIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedComicsIndex, setSelectedComicsIndex] = useState(0);
  const [selectedComics, setSelectedComics] = useState<Icard | null>(null);

  const openModal = (comics: Icard) => {
    setSelectedComics(comics);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const nextComics = () => {
    const nextIndex = (selectedComicsIndex + 1) % datasComicsDetails.length;
    setSelectedComicsIndex(nextIndex);
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
              onClick={() => openModal(comics)}
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
