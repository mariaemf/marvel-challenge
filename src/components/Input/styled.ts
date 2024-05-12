import styled from "styled-components";

export const StyledInput = styled.input`
  width: 380px;
  height: 60px;
  padding: 24px;
  border-radius: 32px;
  margin-bottom: 14px;
  border: none;

  &::placeholder {
    color: var(--color-placeholder);
    font-family: var(--font-axiforma-light);
    font-size: 16px;
  }
`;
