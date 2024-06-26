import { useNavigate } from "react-router-dom";
import Input from "../../components/Input/Input";
import { Password } from "./styled";
import {
  AuthContainer,
  ButtonLoginOrSingUp,
  InputGroup,
  InputLoginOrSingUp,
  RegisterLink,
  TextAccount,
  WelcomeText,
  WrapperLogo,
  WrapperloginAndPassword,
} from "../../components/Layout/GlobalStyled";

function Register() {
  const navigate = useNavigate();

  const handleLoginButtonClick = () => {
    navigate("/characters");
  };

  const handleCreateAccount = () => {
    navigate("/createAccount");
  };
  return (
    <AuthContainer>
      <WrapperLogo>
        <p>MA</p>
        <span>RVEL</span>
      </WrapperLogo>

      <WelcomeText>Bem vindo(a) de volta!</WelcomeText>
      <TextAccount>Acesse sua conta:</TextAccount>

      <InputGroup>
        <Input placeholder="Usuario" type="email" />
        <Input placeholder="Senha" type="password" />
      </InputGroup>

      <WrapperloginAndPassword>
        <InputLoginOrSingUp>
          <input type="checkbox" id="salvarLogin" name="salvarLogin" />
          <label htmlFor="salvarLogin">Salvar login</label>
        </InputLoginOrSingUp>

        <Password>
          <a>Esqueci a senha</a>
        </Password>
      </WrapperloginAndPassword>
      <ButtonLoginOrSingUp onClick={handleLoginButtonClick}>
        Entrar
      </ButtonLoginOrSingUp>
      <RegisterLink>
        <p>
          Ainda não tem o login?
          <button onClick={handleCreateAccount}>Cadastre-se</button>
        </p>
      </RegisterLink>
    </AuthContainer>
  );
}

export default Register;
