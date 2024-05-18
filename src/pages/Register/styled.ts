import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Password = styled.div`
  color: var(--color-secondary);
  font-family: var(--font-axiforma-light);
  border-bottom: 1px solid var(--color-primary);
  font-weight: lighter;
  font-size: 16px;

  cursor: pointer;
  animation: ${fadeIn} 7s ease-in-out;

  &:hover {
    border-bottom: 1px solid var(--color-text);
  }
`;
