export interface DetaileadModal {
  image: string;
  title: string;
  descriptions?: string;
  whichMovie?: string[];
  whichSaga?: string[];
  reviews: string;
  starsOrange?: number;
  starsGray?: number;
  andAcharacter: boolean;
  synopsisDescription?: string;
  avaliableToPurchase?: string;
  placesToBuy: string;
  additionalImage?: string;
}

export interface IDetaileadModalProps {
  closeModal: () => void;
  data: DetaileadModal;
}
