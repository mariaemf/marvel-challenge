import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -50%);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
`;
export const ContainerModal = styled.div`
  position: fixed;
  height: 500px;

  top: 50%;
  left: 30%;
  width: 100%;
  max-width: 800px;
  z-index: 1001;

  display: grid;
  grid-template-columns: 1fr 1fr;
  background: linear-gradient(to right, #ff0000, #800000);
  border-radius: 32px;

  transform: translate(-50%, -50%);
  opacity: 0;
  animation: ${fadeIn} 2s ease forwards;

  @media only screen and (min-width: 1187px) and (max-width: 1400px) {
    height: 500px;
    width: 100%;
    max-width: 700px;
  }
  @media only screen and (min-width: 900px) and (max-width: 1187px) {
    height: 450px;
    width: 100%;
    max-width: 650px;
    left: 38%;
  }
  @media only screen and (min-width: 600px) and (max-width: 890px) {
    height: 430px;
    width: 100%;
    max-width: 580px;
    left: 50%;
  }
  @media only screen and (min-width: 400px) and (max-width: 599px) {
    height: 300px;
    width: 100%;
    max-width: 350px;

    left: 45%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 16px;
  }
  @media only screen and (min-width: 300px) and (max-width: 399px) {
    height: 250px;
    width: 70%;
    max-width: 350px;

    left: 44%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 12px;
  }
`;

export const WrapperImageModal = styled.div`
  display: flex;
  margin-left: -10px;
  margin-top: -6px;
  @media only screen and (min-width: 400px) and (max-width: 599px) {
    img {
      display: none;
    }
  }
  @media only screen and (min-width: 300px) and (max-width: 399px) {
    img {
      display: none;
    }
  }
`;

export const ModalImage = styled.img`
  width: auto;
  height: auto;
`;

export const ContainerInfoModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding-bottom: 32px;
`;

export const TitleModal = styled.h2`
  font-family: var(--font-secondary);
  font-weight: bold;
  font-size: 30px;
  margin-top: 16px;

  color: var(--color-text);
  @media only screen and (min-width: 400px) and (max-width: 599px) {
    font-size: 28px;
  }
  @media only screen and (min-width: 300px) and (max-width: 399px) {
    font-size: 20px;
  }
`;

export const WrapperDescriptions = styled.div`
  display: flex;
  flex-direction: column;
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
  @media only screen and (min-width: 300px) and (max-width: 399px) {
    h4 {
      font-size: 14px;
      margin-top: 8px;
    }
    p {
      font-size: 12px;
    }
    span {
      font-size: 12px;
    }
  }
`;

export const ContainerSynopsisDescription = styled.div`
  width: 250px;

  P {
    font-size: 14px;
    color: var(--color-text);
    font-family: var(--font-axiforma-thin);
  }

  @media only screen and (min-width: 400px) and (max-width: 599px) {
    p {
      font-size: 12px;
      margin-bottom: 8px;
    }
  }
  @media only screen and (min-width: 300px) and (max-width: 399px) {
    p {
      font-size: 10px;
      margin-bottom: 8px;
    }
  }
`;

export const Reviews = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 42px;

  h3 {
    font-size: 26px;
    font-weight: lighter;
    font-family: var(--font-secondary);
    color: var(--color-text);
  }

  @media only screen and (min-width: 400px) and (max-width: 599px) {
    h3 {
      font-size: 18px;
      color: var(--color-text);
      font-family: var(--font-axiforma-thin);
      margin-top: 16px;
    }
  }
  @media only screen and (min-width: 300px) and (max-width: 399px) {
    margin-top: 4px;

    h3 {
      font-size: 16px;
    }
  }
`;

export const ContainerAvailability = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  h2 {
    font-size: 16px;
    font-family: var(--font-secondary);
    color: var(--color-text);
    font-weight: 400;
  }
  img {
    width: 52px;
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
