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
  const context = useContext(GlobalContext)
  const navigate = useNavigate()
  const {compra} = context
  // console.log(compra)
  return (
    <MainHeader>
      <DivLogo>
        <LinkComics onClick={() => goToHomePage(navigate)}>Comics</LinkComics>
      </DivLogo>
      <DivLogo>
        <ImgLogo src={logoMarvelComic} alt="Logo da Marvel Comics" />
      </DivLogo>
      <DivCarrinho>
        <DivUsuario>
          <LogosHeader src={logoUsuario} />
          <p>Olá, usuário</p>
        </DivUsuario>
        <DivCarrrinhoEQtd>
          <span><LogosHeader src={iconeCarrinho} onClick={() => goToBuyPage(navigate)}/></span>
          <SpanQtd>{compra.quantidadeTotal}</SpanQtd>
        </DivCarrrinhoEQtd>
      </DivCarrinho>
    </MainHeader>
  );
};

export default Header;
