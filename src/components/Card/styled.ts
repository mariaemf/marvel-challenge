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
  @media only screen and (min-width: 300px) and (max-width: 374px) {
    width: 150px;
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

  &:hover {
    background-color: rgba(255, 0, 0, 09);
  }
  @media only screen and (min-width: 300px) and (max-width: 374px) {
    height: 150px;
  }
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
  @media only screen and (min-width: 600px) and (max-width: 840px) {
    font-size: 16px;
    margin: 12px 0 8px 0;
  }
  @media only screen and (min-width: 300px) and (max-width: 374px) {
    font-size: 14px;
  }
`;

export const Description = styled.p`
  color: var(--color-text);
  font-family: var(--font-secondary);
  font-size: 16px;
  padding: 14px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 16px;
  @media only screen and (min-width: 600px) and (max-width: 840px) {
    font-size: 14px;
  }
  @media only screen and (min-width: 300px) and (max-width: 374px) {
    font-size: 10px;
  }
`;

export const SeeDetails = styled.a`
  color: var(--color-text);
  font-family: var(--font-secondary);
  font-size: 20px;
  text-decoration: none;
  margin-bottom: 12px;
  cursor: pointer;

  @media only screen and (min-width: 600px) and (max-width: 840px) {
    font-size: 18px;
  }
  @media only screen and (min-width: 300px) and (max-width: 374px) {
    font-size: 16px;
  }
`;
