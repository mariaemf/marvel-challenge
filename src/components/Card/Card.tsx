import {
  CardImage,
  CardInformation,
  Description,
  SeeDetails,
  Title,
  WrappperCard,
} from "./styled";

interface ICardProps {
  image: string;
  title: string;
  description: string;
  onClick: () => void;
}

function Card({ image, title, description, onClick }: ICardProps) {
  return (
    <WrappperCard>
      <CardImage src={image} alt="" />
      <CardInformation>
        <Title>{title}</Title>
        <Description>{description}</Description>

        <SeeDetails href="#" onClick={onClick}>
          ver detalhes
        </SeeDetails>
      </CardInformation>
    </WrappperCard>
  );
}

export default Card;
