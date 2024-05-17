import styled from "styled-components";

export const WrappperCard = styled.div`
  position: relative;
  width: 400px;
  height: auto;
  border-radius: 32px;
  overflow: hidden;
  margin-left: 16px;

  @media only screen and (min-width: 600px) and (max-width: 1340px) {
    width: 60%;
    display: flex;
  }

  @media only screen and (min-width: 375px) and (max-width: 600px) {
    width: 200px;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

export const CardInformation = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;

  bottom: 0;
  left: 0;
  width: 100%;
  height: 200px;
  background-color: rgba(255, 0, 0, 0.7);
  border-radius: 16px 16px 32px 32px;

  /* @media only screen and (min-width: 600px) and (max-width: 840px) {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  } */
`;

export const Title = styled.h2`
  display: flex;
  color: var(--color-text);
  font-family: var(--font-secondary);
  font-size: 24px;
  font-weight: bold;
  margin: 18px 0 10px 0;

  @media only screen and (min-width: 600px) and (max-width: 840px) {
    display: flex;
    margin: 0 32px;
  }
`;

export const Description = styled.p`
  color: var(--color-text);
  font-family: var(--font-secondary);
  font-size: 14px;
  padding: 14px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 16px;
`;

export const SeeDetails = styled.a`
  color: var(--color-text);
  font-family: var(--font-secondary);
  font-size: 20px;
  text-decoration: none;
  margin-bottom: 12px;
  cursor: pointer;
`;
