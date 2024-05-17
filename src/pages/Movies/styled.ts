import styled from "styled-components";

export interface DropDownContentProps {
  show: boolean;
}
export const WrapperCardContainerMovies = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 8rem;
  gap: 42px;
`;

export const DropDownFilter = styled.div<DropDownContentProps>`
  width: 160px;

  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;

  border: 3px solid var(--color-primary);
  border-radius: 8px;
  background: transparent;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  position: absolute;
  top: 11rem;
  left: 2rem;

  h2 {
    font-size: 16px;
    color: var(--color-primary);
    font-family: var(--font-secondary);
    font-weight: bold;
  }
  max-height: ${(props: DropDownContentProps) =>
    props.show ? "300px" : "60px"};
`;
export const DropDownContent = styled.div<DropDownContentProps>`
  display: ${(props) => (props.show ? "flex" : "none")};
  flex-direction: column;
  margin-top: 8px;
  gap: 24px;
`;
export const FilterIcon = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const ButtonCard = styled.div`
  background: transparent;
  border: none;
`;

export const ContainerCardMovies = styled.div`
  display: flex;
  align-items: center;
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
    top: 42px;
  }
`;
