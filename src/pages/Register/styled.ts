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

export const ContainerRegister = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  width: 50vw;
  max-width: 50%;
  margin: 6rem 0 0 12.5vw;

  color: var(--color-text);
  animation: ${fadeIn} 1s ease-in-out;
`;
export const WrapperLogo = styled.div`
  display: flex;
  flex-direction: column;
  animation: ${slideInFromBottom} 1s ease-in-out; // Aplica a animação de deslizar

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
`;

export const WelcomeText = styled.div`
  color: var(--color-primary);
  font-family: var(--font-secondary);
  font-weight: bold;
  font-size: 30px;
  animation: ${fadeIn} 7s ease-in-out;
`;

export const TextAccount = styled.div`
  color: var(--color-secondary);
  font-family: var(--font-axiforma-light);
  font-weight: lighter;
  font-size: 20px;
  animation: ${fadeIn} 7s ease-in-out;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  animation: ${fadeIn} 7s ease-in-out;
`;
export const ButtonLogin = styled.button`
  width: 380px;
  height: 60px;
  border-radius: 32px;
  margin-bottom: 14px;
  border: none;

  background: var(--color-primary);
  color: var(--color-text);
  font-family: var(--font-primary);
  font-size: 24px;
  animation: ${fadeIn} 7s ease-in-out;
`;

export const WrapperloginAndPassword = styled.div`
  width: 350px;
  margin: 16px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InputLogin = styled.div`
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
    font-size: 14px;
  }
`;

export const Password = styled.div`
  color: var(--color-secondary);
  font-family: var(--font-axiforma-light);
  border-bottom: 1px solid var(--color-primary);
  font-weight: lighter;
  font-size: 14px;

  cursor: pointer;
  animation: ${fadeIn} 7s ease-in-out;
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
  a {
    color: var(--color-primary);
    font-family: var(--font-axiforma-light);
    font-weight: lighter;
    font-size: 16px;

    cursor: pointer;
  }
`;
