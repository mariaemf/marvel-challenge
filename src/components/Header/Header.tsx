import {
  GetOutButton,
  HeaderNavigation,
  LogoHeader,
  StyledNavLink,
  UserSection,
  WrapperHeader,
} from "./styled";
import ProfilePhoto from "../../assets/profile.svg";
import { useLocation, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGetOut = () => {
    navigate("/");
  };

  return (
    <WrapperHeader>
      <LogoHeader>MA</LogoHeader>

      <HeaderNavigation>
        <StyledNavLink
          to="/characters"
          isSelected={location.pathname === "/characters"}
        >
          Personagens
        </StyledNavLink>
        <StyledNavLink
          to="/movies"
          isSelected={location.pathname === "/movies"}
        >
          Filmes
        </StyledNavLink>
        <StyledNavLink
          to="/comics"
          isSelected={location.pathname === "/comics"}
        >
          HQs
        </StyledNavLink>
      </HeaderNavigation>

      <UserSection>
        <img src={ProfilePhoto} alt="Foto de Perfil" />
        <GetOutButton onClick={handleGetOut}>Sair</GetOutButton>
      </UserSection>
    </WrapperHeader>
  );
}

export default Header;
