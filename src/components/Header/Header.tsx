import {
  GetOutButton,
  HeaderNavigation,
  LogoHeader,
  StyledLink,
  UserSection,
  WrapperHeader,
} from "./styled";
import ProfilePhoto from "../../assets/profile.svg";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleGetOut = () => {
    navigate("/");
  };
  return (
    <WrapperHeader>
      <LogoHeader>MA</LogoHeader>

      <HeaderNavigation>
        <StyledLink to="/characters">Personagens</StyledLink>
        <StyledLink to="/movies">Filmes</StyledLink>
        <StyledLink to="/comics">HQs</StyledLink>
      </HeaderNavigation>

      <UserSection>
        <img src={ProfilePhoto} alt="Foto de Perfil" />
        <GetOutButton onClick={handleGetOut}>Sair</GetOutButton>
      </UserSection>
    </WrapperHeader>
  );
}

export default Header;
