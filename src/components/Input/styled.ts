import styled from "styled-components";

export const StyledInput = styled.input`
  width: 400px;
  height: 75px;
  padding: 24px;
  border-radius: 32px;
  margin-bottom: 16px;
  border: none;

  &::placeholder {
    color: var(--color-placeholder);
    font-family: var(--font-axiforma-light);
    font-size: 16px;
  }
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    width: 300px;
    height: 60px;
  }
`;
