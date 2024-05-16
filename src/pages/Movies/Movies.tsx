import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Card from "../../components/Card/Card";
import {
  ButtonCard,
  ContainerCardMovies,
  WrapperCardContainerMovies,
} from "./styled";
import { movies } from "./moviesData";
import { moviesDetails } from "./moviesDetailsData";
import DetaileadModal from "../../components/DetailedModal/DetaileadModal";
import { WrapperModal, WrapperModalButton } from "../Characters/styled";
import { Icard } from "../../types/card";

function Movies() {
  const [startIndex, setStartIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMoviesIndex, setSelectedMoviesIndex] = useState(0);
  const [selectedMovie, setSelectedMovie] = useState<Icard | null>(null);

  const onNext = () => {
    setStartIndex((prevIndex) => prevIndex + 1);
  };

  const onPrevious = () => {
    setStartIndex((prevIndex) => prevIndex - 1);
  };

  const openModal = (movie: Icard) => {
    setSelectedMovie(movie);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const nextMovie = () => {
    const nextIndex = (selectedMoviesIndex + 1) % moviesDetails.length;
    setSelectedMoviesIndex(nextIndex);
  };

  return (
    <>
      <WrapperCardContainerMovies>
        <ButtonCard onClick={onPrevious} disabled={startIndex === 0}>
          <FaArrowLeft color="#FF0000" size={32} />
        </ButtonCard>
        <ContainerCardMovies>
          {movies.slice(startIndex, startIndex + 3).map((movie, index) => (
            <Card
              key={index}
              title={movie.title}
              description={movie.description}
              image={movie.image}
              onClick={() => openModal(movie)}
            />
          ))}
          <ButtonCard
            onClick={onNext}
            disabled={startIndex >= movies.length - 3}
          >
            <FaArrowRight color="#FF0000" size={32} />
          </ButtonCard>
        </ContainerCardMovies>
      </WrapperCardContainerMovies>

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
