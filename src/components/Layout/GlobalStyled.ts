import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const slideInFromBottom = keyframes`
from {
  transform: translateY(100%);
}
to {
  transform: translateY(0);
}
`;

const moveArrow = keyframes`
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(5px);
  }
`;

export const WrapperCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 8rem;
  gap: 42px;
`;

export const ContainerCard = styled.div`
  display: flex;
  align-items: center;
  gap: 42px;

  @media only screen and (min-width: 750px) and (max-width: 960px) {
    width: 100%;
    display: flex;
    padding: 24px;
  }
  @media only screen and (min-width: 375px) and (max-width: 740px) {
    display: flex;
    flex-direction: column;

    position: relative;
    bottom: 4rem;
  }
  @media only screen and (min-width: 300px) and (max-width: 374px) {
    display: flex;
    flex-direction: column;

    position: relative;
    bottom: 40px;
  }
`;

export const WrapperModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;

  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;

  z-index: 1000;

  width: 100%;
  height: 100%;
`;

export const WrapperModalButton = styled.div`
  display: flex;
  margin-right: 46px;

  svg {
    animation: ${moveArrow} 1s infinite;
  }
`;

export const WrapperButtonCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  margin-top: 32px;

  @media only screen and (min-width: 375px) and (max-width: 740px) {
    position: relative;
    display: flex;
    bottom: 24px;
  }
`;

export const ButtonCard = styled.button`
  background: transparent;
  border: none;
`;

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  gap: 14px;

  width: 50vw;
  max-width: 50%;
  margin: 6rem 0 0 12.5vw;

  color: var(--color-text);
  animation: ${fadeIn} 1s ease-in-out;

  @media only screen and (min-width: 481px) and (max-width: 760px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const WrapperLogo = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  align-items: center;

  animation: ${slideInFromBottom} 2s ease-in-out;

  p {
    font-size: 100px;
    font-family: var(--font-primary);
    background: red;
    padding-left: 12px;
    width: 260px;
    height: 120px;
  }
  span {
    font-size: 100px;
    font-family: var(--font-primary);
  }

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    width: 200px;
    flex-direction: row;

    p {
      font-size: 50px;
      width: 150px;
      height: 60px;
    }

    span {
      font-size: 50px;
    }
  }
`;

export const WelcomeText = styled.div`
  color: var(--color-primary);
  font-family: var(--font-secondary);
  font-weight: bold;
  font-size: 30px;

  padding-left: 2rem;
  margin-bottom: 12px;
  animation: ${fadeIn} 7s ease-in-out;

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 15px;
    padding-left: 0px;
    margin-top: 24px;
    margin-bottom: 8px;
  }
`;

export const TextAccount = styled.div`
  color: var(--color-secondary);
  font-family: var(--font-axiforma-light);
  font-weight: lighter;
  font-size: 20px;
  animation: ${fadeIn} 7s ease-in-out;

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  animation: ${fadeIn} 7s ease-in-out;
`;
export const ButtonLoginOrSingUp = styled.button`
  width: 400px;
  height: 60px;
  border-radius: 32px;
  margin-bottom: 14px;
  border: none;

  background: var(--color-primary);
  color: var(--color-text);
  font-family: var(--font-primary);
  font-size: 24px;

  cursor: pointer;
  animation: ${fadeIn} 7s ease-in-out;

  &:hover {
    border: 2px solid var(--color-primary);
    background: var(--color-background);
    color: var(--color-primary);
  }

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    width: 320px;
  }
`;

export const InputLoginOrSingUp = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  animation: ${fadeIn} 7s ease-in-out;

  input {
    border: 8px solid red;
  }
  label {
    color: var(--color-secondary);
    font-family: var(--font-axiforma-light);
    font-weight: lighter;
    font-size: 16px;
  }
`;

export const RegisterLink = styled.div`
  margin-left: 2rem;

  animation: ${fadeIn} 7s ease-in-out;

  p {
    color: var(--color-secondary);
    font-family: var(--font-axiforma-light);
    font-weight: lighter;
    font-size: 16px;
  }
  button {
    color: var(--color-primary);
    font-family: var(--font-axiforma-light);
    font-weight: lighter;
    font-size: 16px;

    margin-left: 6px;
    background: transparent;
    border: none;
    cursor: pointer;
  }
  &:hover button {
    color: var(--color-secondary);
  }
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    width: 320px;
  }
`;

export const WrapperloginAndPassword = styled.div`
  width: 380px;
  margin: 16px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    justify-content: flex-start;
    display: flex;
    align-items: flex-start;
    gap: 80px;
  }
`;
