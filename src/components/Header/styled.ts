import { NavLink, NavLinkProps } from "react-router-dom";
import styled from "styled-components";
interface StyledNavLinkProps extends NavLinkProps {
  isSelected?: boolean;
}
export const WrapperHeader = styled.div`
  width: 100%;
  height: 110px;
  padding: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background: var(--color-background);
  border-bottom: 1px solid var(--color-primary);

  @media only screen and (min-width: 400px) and (max-width: 850px) {
    gap: 4rem;
    padding-left: 16px;
  }
  @media only screen and (min-width: 300px) and (max-width: 399px) {
    width: 100%;
    gap: 24px;
    padding-left: 16px;
  }
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

  @media only screen and (min-width: 580px) and (max-width: 850px) {
    width: 80px;
    height: 40px;
    font-size: 40px;
  }

  @media only screen and (min-width: 350px) and (max-width: 570px) {
    display: none;
  }
`;

export const HeaderNavigation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16rem;

  @media only screen and (min-width: 800px) and (max-width: 1195px) {
    display: flex;
    gap: 8rem;
  }

  @media only screen and (min-width: 400px) and (max-width: 850px) {
    gap: 4rem;
  }
  @media only screen and (min-width: 300px) and (max-width: 399px) {
    gap: 24px;
  }
`;

export const StyledNavLink = styled(NavLink)<StyledNavLinkProps>`
  color: ${({ isSelected }) =>
    isSelected ? "var(--color-text)" : "var(--color-secondary)"};
  font-size: 30px;
  font-family: var(--font-secondary);
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;

  &:hover,
  &:focus {
    color: var(--color-text);
    border-bottom: 1px solid var(--color-primary);
  }

  @media only screen and (min-width: 400px) and (max-width: 850px) {
    font-size: 20px;
    font-family: var(--font-secondary);
    font-weight: bold;
    text-decoration: none;
  }
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 18px;
  }
  @media only screen and (min-width: 300px) and (max-width: 399px) {
    font-size: 16px;
  }
`;
export const UserSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 24px;

  @media only screen and (min-width: 600px) and (max-width: 850px) {
    flex-direction: column;
    display: flex;
    margin-left: 32px;
    gap: 8px;

    img {
      width: 40px;
    }
  }

  @media only screen and (min-width: 320px) and (max-width: 599px) {
    img {
      display: none;
    }
  }
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

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 18px;

    border-bottom: 1px solid var(--color-primary);
  }
`;
