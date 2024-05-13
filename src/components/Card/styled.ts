import styled from "styled-components";

export const WrappperCard = styled.div`
  position: relative;
  width: 100%;
  width: 400px;
  height: auto;
  border-radius: 32px;
  overflow: hidden;
  margin-left: 16px;
`;
export const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

export const CardInformation = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;

  bottom: 0;
  left: 0;
  width: 100%;
  height: 200px;
  background-color: rgba(255, 0, 0, 0.7);
  border-radius: 16px 16px 32px 32px;
`;

export const Title = styled.h2`
  color: var(--color-text);
  font-family: var(--font-secondary);
  font-weight: bold;
  margin: 18px 0 10px 0;
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
`;

export const SeeDetails = styled.a`
  color: var(--color-text);
  font-family: var(--font-secondary);
  text-decoration: none;
  margin-top: 2px;
  cursor: pointer;
`;
