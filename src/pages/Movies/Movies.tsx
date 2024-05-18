import { useState } from "react";
import {
  ButtonFilter,
  DropDownContent,
  DropDownFilter,
  FilterIcon,
} from "./styled";
import {
  ButtonCard,
  ContainerCard,
  WrapperButtonCard,
  WrapperCardContainer,
  WrapperModal,
  WrapperModalButton,
} from "../../components/Layout/GlobalStyled";
import { MdAccessTime } from "react-icons/md";
import { FaRegCirclePlay } from "react-icons/fa6";

import Card from "../../components/Card/Card";

import { movies as movieData } from "./moviesData";
import { moviesDetails } from "./moviesDetailsData";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import DetaileadModal from "../../components/DetailedModal/DetaileadModal";

function Movies() {
  const [startIndex, setStartIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMoviesIndex, setSelectedMoviesIndex] = useState<number | null>(
    null
  );
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState("lancamento");

  const onNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % movieData.length);
  };

  const onPrevious = () => {
    setStartIndex(
      (prevIndex) => (prevIndex - 1 + movieData.length) % movieData.length
    );
  };

  const openModal = (index: number) => {
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

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
  };

  const sortedMovies = [...movieData].sort((a, b) => {
    if (filter === "lancamento") {
      return a.lancamento - b.lancamento;
    } else if (filter === "cronologia") {
      return a.cronologia - b.cronologia;
    }
    return 0;
  });

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
            <ButtonFilter onClick={() => handleFilterChange("cronologia")}>
              cronologia
            </ButtonFilter>
            <ButtonFilter onClick={() => handleFilterChange("lancamento")}>
              lançamento
            </ButtonFilter>
          </DropDownContent>
        )}
      </DropDownFilter>

      <WrapperCardContainer>
        <ContainerCard>
          {sortedMovies
            .slice(startIndex, startIndex + 3)
            .map((movie, index) => (
              <Card
                key={index}
                title={movie.title}
                description={movie.description}
                image={movie.image}
                onClick={() => openModal(index + startIndex)}
              />
            ))}
        </ContainerCard>
      </WrapperCardContainer>

      <WrapperButtonCard>
        <ButtonCard onClick={onPrevious}>
          <FaArrowLeft color="#FF0000" size={42} />
        </ButtonCard>
        <ButtonCard onClick={onNext}>
          <FaArrowRight color="#FF0000" size={42} />
        </ButtonCard>
      </WrapperButtonCard>

      {modalOpen && (
        <WrapperModal>
          <DetaileadModal
            closeModal={closeModal}
            data={moviesDetails[selectedMoviesIndex ?? 0]}
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
