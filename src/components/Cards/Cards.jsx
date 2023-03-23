import React from "react";
import { BotaoDoCard, Card, CardBody, CardFooter, DivInfosCard, ImgDoCard } from "./styles";

const Cards = (props) => {
  const {comic} = props
  function handleRandomNumber(a, b) {
    return Math.floor(Math.random() * (b-a + 1)) + a
  }
  return (
    <Card>
      <CardBody>
        <ImgDoCard src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={`Imagem do quadrinho ${comic.title}`}/>
        <DivInfosCard>
          <h5>{comic.title}</h5>
          <p>R${handleRandomNumber(100, 200)}</p>
        </DivInfosCard>
      </CardBody> 
      <CardFooter>
        <BotaoDoCard>Add ao carrinho</BotaoDoCard>
        <BotaoDoCard>Infos</BotaoDoCard>
      </CardFooter>
    </Card>
  );
};

export default Cards;
