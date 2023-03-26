import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContext";
import { goToInfosPage } from "../../routes/coordinator";
import { BotaoDoCard, Card, CardBody, CardFooter, DivInfosCard, ImgDoCard } from "./styles";

const Cards = (props) => {
  const context = useContext(GlobalContext)
  const {enviarCarrinho, formataDinheiro} = context
  const {comic} = props
  
  
  const navigate = useNavigate()
  return (
    <Card>
      <CardBody>
        <ImgDoCard src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={`Imagem do quadrinho ${comic.title}`}/>
        <DivInfosCard>
          <h5>{comic.title}</h5>
          <p>{comic.tipo}</p>
          <p>R$ {formataDinheiro(comic)}</p>
        </DivInfosCard>
      </CardBody> 
      <CardFooter>
        <BotaoDoCard onClick={() => enviarCarrinho(comic.id)}>Comprar</BotaoDoCard>
        <BotaoDoCard onClick={() => goToInfosPage(navigate, comic.id)}>Infos</BotaoDoCard>
      </CardFooter>
    </Card>
  );
};

export default Cards;
