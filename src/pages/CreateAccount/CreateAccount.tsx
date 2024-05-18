import { useNavigate } from "react-router-dom";
import Input from "../../components/Input/Input";
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

function CreateAccount() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/characters");
  };

  const handleCreateAccount = () => {
    navigate("/");
  };

  return (
    <AuthContainer>
      <WrapperLogo>
        <p>MA</p>
        <span>RVEL</span>
      </WrapperLogo>

      <WelcomeText>Bem vindo(a)!</WelcomeText>
      <TextAccount>Crie sua conta:</TextAccount>

      <InputGroup>
        <Input placeholder="Usuario" type="email" />
        <Input placeholder="Senha" type="password" />
        <Input placeholder="Confirme sua senha" type="password" />
      </InputGroup>

      <WrapperloginAndPassword>
        <InputLoginOrSingUp>
          <input type="checkbox" id="aceitarTermos" name="aceitarTermos" />
          <label htmlFor="aceitarTermos">Aceito os termos e condições</label>
        </InputLoginOrSingUp>
      </WrapperloginAndPassword>

      <ButtonLoginOrSingUp onClick={handleLogin}>Cadastrar</ButtonLoginOrSingUp>
      <RegisterLink>
        <p>
          Já possui uma conta?
          <button onClick={handleCreateAccount}>Faça login</button>
        </p>
      </RegisterLink>
    </AuthContainer>
  );
}

export default CreateAccount;
