import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import { ContainerCard, WrapperCardContainer } from "./styled";
import Spider from "../../assets/spiderman.svg";

function Characters() {
  return (
    <>
      <Header />
      <WrapperCardContainer>
        <ContainerCard>
          <Card
            description="Após ser mordido por uma aranha radioativa, Peter Parker se torna o amigo da vizinhança, o Homem-Aranha."
            title="Homem-Aranha"
            onClick={() => {}}
            image={Spider}
          />
          <Card
            description="Após ser mordido por uma aranha radioativa, Peter Parker se torna o amigo da vizinhança, o Homem-Aranha."
            title="Homem-Aranha"
            onClick={() => {}}
            image={Spider}
          />{" "}
          <Card
            description="Após ser mordido por uma aranha radioativa, Peter Parker se torna o amigo da vizinhança, o Homem-Aranha."
            title="Homem-Aranha"
            onClick={() => {}}
            image={Spider}
          />{" "}
          <Card
            description="Após ser mordido por uma aranha radioativa, Peter Parker se torna o amigo da vizinhança, o Homem-Aranha."
            title="Homem-Aranha"
            onClick={() => {}}
            image={Spider}
          />
        </ContainerCard>
      </WrapperCardContainer>
    </>
  );
}

export default Characters;
