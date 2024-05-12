import { useNavigate } from "react-router-dom";
import Input from "../../components/Input/Input";
import {
  ButtonLogin,
  ContainerRegister,
  InputGroup,
  InputLogin,
  Password,
  RegisterLink,
  TextAccount,
  WelcomeText,
  WrapperLogo,
  WrapperloginAndPassword,
} from "./styled";

function Register() {
  const navigate = useNavigate();

  const handleLoginButtonClick = () => {
    navigate("/characters");
  };

  return (
    <ContainerRegister>
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
        <InputLogin>
          <input type="checkbox" id="salvarLogin" name="salvarLogin" />
          <label htmlFor="salvarLogin">Salvar login</label>
        </InputLogin>

        <Password>
          <a>Esqueci a senha</a>
        </Password>
      </WrapperloginAndPassword>
      <ButtonLogin onClick={handleLoginButtonClick}>Entrar</ButtonLogin>
      <RegisterLink>
        <p>
          Ainda não tem o login? <a>Cadastre-se</a>
        </p>
      </RegisterLink>
    </ContainerRegister>
  );
}

export default Register;
