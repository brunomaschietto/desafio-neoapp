import React, { useContext } from "react";
import {
  BotaoCarrinho,
  DivCarrinho,
  DivCarrrinhoEQtd,
  DivLogo,
  DivUsuario,
  ImgLogo,
  LinkComics,
  LogosHeader,
  MainHeader,
  SpanQtd,
} from "./styles";
import logoMarvelComic from "../../assets/logoMarvelComic.png";
import logoUsuario from "../../assets/logoUsuario.png";
import iconeCarrinho from "../../assets/iconeCarrinho.png";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useNavigate } from "react-router-dom";
import { goToBuyPage, goToHomePage } from "../../routes/coordinator";

const Header = () => {
  const context = useContext(GlobalContext);
  const navigate = useNavigate();
  const { carrinho } = context;
  const quantidadeTotal = carrinho.reduce(
    (acumulado, item) => acumulado + item.quantidadeTotal,
    0
  );
  console.log(carrinho);
  return (
    <MainHeader>
      <DivLogo>
        <LinkComics
          data-cy="textoComics"
          onClick={() => goToHomePage(navigate)}
        >
          Comics
        </LinkComics>
      </DivLogo>
      <DivLogo>
        <ImgLogo
          data-cy="logo"
          src={logoMarvelComic}
          alt="Logo da Marvel Comics"
        />
      </DivLogo>
      <DivCarrinho>
        <DivUsuario>
          <LogosHeader data-cy="logoUsuario" src={logoUsuario} />
          <p>Olá, usuário</p>
        </DivUsuario>
        <DivCarrrinhoEQtd>
          <span>
            <LogosHeader
              data-cy="logoCarrinho"
              src={iconeCarrinho}
              onClick={() => goToBuyPage(navigate)}
            />
          </span>
          <SpanQtd>{quantidadeTotal}</SpanQtd>
        </DivCarrrinhoEQtd>
      </DivCarrinho>
    </MainHeader>
  );
};

export default Header;
