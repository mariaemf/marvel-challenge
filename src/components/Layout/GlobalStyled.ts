import styled from "styled-components";

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
`;

//estilos padroes dos modais
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
`;

//estilos padroes de botoes
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
