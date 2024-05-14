import {
  CloseModalButton,
  ContainerAvailability,
  ContainerInfoModal,
  ContainerModal,
  ContainerSynopsisDescription,
  ModalImage,
  Reviews,
  TitleModal,
  WrapperDescriptions,
} from "./styled";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import disney from "../../assets/shoppingImage/americanas.svg";

export interface IDetaileadModalProps {
  closeModal: () => void;
  data: {
    id: string;
    image: string;
    title: string;
    descriptions: string;
    whichMovie: string[];
    whichSaga: string[];
    reviews: string;
    starsOrange: number;
    starsGray: number;
    andAcharacter: boolean;
    synopsisDescription: string;
  };
}

const DetaileadModal: React.FC<IDetaileadModalProps> = ({
  closeModal,
  data,
}) => {
  const handleCloseModal = () => {
    closeModal();
  };
  const {
    id,
    image,
    title,
    descriptions,
    whichMovie,
    whichSaga,
    reviews,
    starsOrange,
    starsGray,
    andAcharacter,
    synopsisDescription,
  } = data;

  return (
    <ContainerModal id={id}>
      <ModalImage src={image} alt="" />
      <ContainerInfoModal>
        <TitleModal>{title}</TitleModal>

        {andAcharacter ? (
          <WrapperDescriptions>
            <h4>{descriptions}:</h4>
            <>
              {whichMovie.map((movie, index) => (
                <p key={index}>
                  {movie} - <span>{whichSaga[index]}</span>
                </p>
              ))}
            </>
          </WrapperDescriptions>
        ) : (
          <ContainerSynopsisDescription>
            <p>{synopsisDescription}</p>
          </ContainerSynopsisDescription>
        )}
        {andAcharacter ? null : (
          <ContainerAvailability>
            <h2>Disponível para compra:</h2>
            <div>
              <img src={disney} alt="" />
            </div>
          </ContainerAvailability>
        )}

        <Reviews>
          <h3>{reviews}</h3>
          <div>
            {[...Array(starsOrange)].map((_, index) => (
              <FaStar key={`orange_${index}`} size={42} color="#FF9C00" />
            ))}
            {[...Array(starsGray)].map((_, index) => (
              <FaStar key={`gray_${index}`} size={42} color="#84848D" />
            ))}
          </div>
        </Reviews>

        <CloseModalButton>
          <IoMdCloseCircleOutline
            size={30}
            color="#fff"
            onClick={handleCloseModal}
          />
        </CloseModalButton>
      </ContainerInfoModal>
    </ContainerModal>
  );
};

export default DetaileadModal;
