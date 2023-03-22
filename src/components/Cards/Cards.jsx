import React from "react";
import { BotaoDoCard, Card, CardBody, CardFooter, ImgDoCard } from "./styles";

const Cards = (props) => {
  const {comic} = props
  return (
    <Card>
      <CardBody>
        <ImgDoCard src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={`Imagem do quadrinho ${comic.title}`}/>
        <div>
          <h5>{comic.title}</h5>
          <p>R$300,00</p>
        </div>
      </CardBody> 
      <CardFooter>
        <BotaoDoCard>Add ao carrinho</BotaoDoCard>
        <BotaoDoCard>Infos</BotaoDoCard>
      </CardFooter>
    </Card>
  );
};

export default Cards;
