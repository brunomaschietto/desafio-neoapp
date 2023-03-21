import React from "react";
import { DivCarrinho, ImgLogo, LinkComics, MainHeader } from "./styles";
import logoMarvelComic from "../../assets/logoMarvelComic.png";
import logoUsuario from "../../assets/logoUsuario.png";

const Header = () => {
  return (
    <MainHeader>
      <div>
        <LinkComics>Comics</LinkComics>
      </div>
      <div>
        <ImgLogo src={logoMarvelComic} alt="Logo da Marvel Comics" />
      </div>
      <DivCarrinho>
        <div>
          <img src={logoUsuario} />
          <p>Olá, usuário</p>
        </div>
        <button>Carrinho</button>
      </DivCarrinho>
    </MainHeader>
  );
};

export default Header;
