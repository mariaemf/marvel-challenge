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
`;
