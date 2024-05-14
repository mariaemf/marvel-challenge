import styled from "styled-components";

export const ContainerModal = styled.div`
  position: absolute;
  height: 440px;

  top: 50%;
  left: 30%;
  width: 80%;
  max-width: 700px;
  z-index: 1001;

  transform: translate(-50%, -50%);

  display: grid;
  grid-template-columns: 1fr 1fr;
  background: linear-gradient(to right, #ff0000, #800000);
  border-radius: 32px;
`;

export const ModalImage = styled.img`
  width: auto;
  height: auto;
`;

export const ContainerInfoModal = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleModal = styled.h2`
  margin-top: 32px;
  font-family: var(--font-secondary);
  font-weight: bold;
  font-size: 30px;

  margin-bottom: 14px;

  color: var(--color-text);
`;

export const WrapperDescriptions = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
  gap: 4px;
  color: var(--color-text);

  h4 {
    font-size: 18px;
    font-weight: bold;
    font-family: var(--font-secondary);
  }
  p {
    font-size: 18px;
    font-family: var(--font-secondary);
    text-transform: capitalize;
  }
  span {
    font-size: 18px;
    font-family: var(--font-axiforma-thin);
    text-transform: capitalize;
  }
`;

export const ContainerSynopsisDescription = styled.div`
  width: 250px;
  margin-bottom: 14px;

  P {
    font-size: 14px;
    color: var(--color-text);
    font-family: var(--font-axiforma-thin);
  }
`;

export const Reviews = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 26px;
    font-weight: lighter;
    font-family: var(--font-secondary);
    color: var(--color-text);
  }
`;

export const ContainerAvailability = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 16px 0;

  h2 {
    font-size: 16px;
    font-family: var(--font-secondary);
    color: var(--color-text);
    font-weight: 400;
  }
`;

export const CloseModalButton = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 16px;

  cursor: pointer;
`;
