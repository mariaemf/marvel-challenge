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
  WrapperImageModal,
} from "./styled";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { IDetaileadModalProps } from "../../types/detaileadModal";

const DetaileadModal: React.FC<IDetaileadModalProps> = ({
  closeModal,
  data,
}) => {
  const handleCloseModal = () => {
    closeModal();
  };
  const {
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
    placesToBuy,
    additionalImage,
    avaliableToPurchase,
  } = data;

  return (
    <ContainerModal>
      <WrapperImageModal>
        <ModalImage src={image} alt="" />
      </WrapperImageModal>
      <ContainerInfoModal>
        <TitleModal>{title}</TitleModal>

        {andAcharacter ? (
          <WrapperDescriptions>
            <h4>{descriptions}:</h4>
            <>
              {whichMovie?.map((movie, index) => (
                <p key={index}>
                  {movie} - <span>{whichSaga?.[index]}</span>
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
            <h2>{avaliableToPurchase}</h2>
            <div>
              <img src={placesToBuy} alt="" />
              <>
                {additionalImage ? <img src={additionalImage} alt="" /> : null}
              </>
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
