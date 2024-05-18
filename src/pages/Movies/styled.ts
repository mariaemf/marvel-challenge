import styled from "styled-components";

export interface DropDownContentProps {
  show: boolean;
}

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
  cursor: pointer;

  h2 {
    font-size: 16px;
    color: var(--color-primary);
    font-family: var(--font-secondary);
    font-weight: bold;
  }

  max-height: ${(props: DropDownContentProps) =>
    props.show ? "300px" : "60px"};

  @media only screen and (min-width: 746px) and (max-width: 1600px) {
    top: 7.5rem;
    gap: 4px;
  }

  @media only screen and (min-width: 458px) and (max-width: 590px) {
    position: absolute;
    align-items: center;
    justify-content: center;
    width: 120px;

    top: 8rem;
    left: 2rem;
    h2 {
      font-size: 12px;
      color: var(--color-primary);
      font-family: var(--font-secondary);
      font-weight: bold;
    }
  }

  @media only screen and (min-width: 300px) and (max-width: 458px) {
    h2 {
      font-size: 10px;
      color: var(--color-primary);
      font-family: var(--font-secondary);
      font-weight: bold;
    }

    width: 100px;

    top: 7.5rem;
    left: 1rem;
  }
`;
export const ButtonFilter = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  color: var(--color-primary);
  font-family: var(--font-secondary);
  font-weight: bold;

  background: transparent;
  border: none;
  cursor: pointer;

  @media only screen and (min-width: 375px) and (max-width: 578px) {
    font-size: 12px;
  }
  @media only screen and (min-width: 300px) and (max-width: 374px) {
    font-size: 10px;
  }
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

export const ButtonCard = styled.button`
  background: transparent;
  border: none;
`;
