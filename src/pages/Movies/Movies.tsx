import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Card from "../../components/Card/Card";
import {
  ButtonCard,
  ContainerCardMovies,
  DropDownContent,
  DropDownFilter,
  FilterIcon,
  WrapperCardContainerMovies,
} from "./styled";
import { movies } from "./moviesData";
import { moviesDetails } from "./moviesDetailsData";
import DetaileadModal from "../../components/DetailedModal/DetaileadModal";
import {
  WrapperButtonCard,
  WrapperModal,
  WrapperModalButton,
} from "../Characters/styled";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

function Movies() {
  const [startIndex, setStartIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMoviesIndex, setSelectedMoviesIndex] = useState(null);

  const onNext = () => {
    setStartIndex((prevIndex) => prevIndex + 1);
  };

  const onPrevious = () => {
    setStartIndex((prevIndex) => prevIndex - 1);
  };

  const openModal = (index) => {
    setSelectedMoviesIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const nextMovie = () => {
    const nextIndex = ((selectedMoviesIndex ?? -1) + 1) % moviesDetails.length;
    setSelectedMoviesIndex(nextIndex);
    if (nextIndex === 0) {
      closeModal();
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <DropDownFilter show={isOpen}>
        <FilterIcon onClick={toggleDropdown}>
          <h2>Filtrar por</h2>
          {isOpen ? (
            <RiArrowUpSLine size={32} color="#FF0000" />
          ) : (
            <RiArrowDownSLine size={32} color="#FF0000" />
          )}
        </FilterIcon>
        {isOpen && (
          <DropDownContent show={isOpen}>
            <h2>lançamento</h2>
            <h2>cronologia</h2>
          </DropDownContent>
        )}
      </DropDownFilter>

      <WrapperCardContainerMovies>
        <ContainerCardMovies>
          {movies.slice(startIndex, startIndex + 3).map((movie, index) => (
            <Card
              key={index}
              title={movie.title}
              description={movie.description}
              image={movie.image}
              onClick={() => openModal(index + startIndex)}
            />
          ))}
        </ContainerCardMovies>
      </WrapperCardContainerMovies>

      <WrapperButtonCard>
        <ButtonCard onClick={onPrevious} disabled={startIndex === 0}>
          <FaArrowLeft color="#FF0000" size={42} />
        </ButtonCard>
        <ButtonCard onClick={onNext} disabled={startIndex >= movies.length - 3}>
          <FaArrowRight color="#FF0000" size={42} />
        </ButtonCard>
      </WrapperButtonCard>

      {modalOpen && (
        <WrapperModal>
          <DetaileadModal
            closeModal={closeModal}
            data={moviesDetails[selectedMoviesIndex]}
          />
          <WrapperModalButton>
            <FaArrowRight onClick={nextMovie} color="#FF0000" size={32} />
          </WrapperModalButton>
        </WrapperModal>
      )}
    </>
  );
}

export default Movies;
