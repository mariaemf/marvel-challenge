import styled from "styled-components";

export const ContainerCard = styled.div`
  display: flex;
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

export const WrapperModalButton = styled.div`
  display: flex;
  margin-right: 46px;
`;
