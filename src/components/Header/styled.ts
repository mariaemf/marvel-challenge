import { Link } from "react-router-dom";
import styled from "styled-components";

export const WrapperHeader = styled.div`
  width: 100%;
  height: 110px;
  padding: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background: var(--color-background);
  box-shadow: 0 2px 0px var(--color-primary);
`;

export const LogoHeader = styled.div`
  align-items: center;
  justify-content: center;

  width: 120px;
  height: 50px;
  padding-left: 4px;

  font-size: 50px;
  color: var(--color-text);
  font-family: var(--font-primary);
  background: var(--color-primary);
`;

export const HeaderNavigation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16rem;
`;

export const StyledLink = styled(Link)`
  color: var(--color-secondary);
  font-size: 30px;
  font-family: var(--font-secondary);
  font-weight: bold;
  text-decoration: none;

  &:hover,
  &:focus {
    color: var(--color-text);
  }
`;

export const UserSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 24px;
`;

export const GetOutButton = styled.button`
  border: none;
  background: transparent;
  color: var(--color-secondary);
  font-family: var(--font-secondary);
  font-size: 24px;

  cursor: pointer;

  &:hover {
    color: var(--color-text);
  }
`;
