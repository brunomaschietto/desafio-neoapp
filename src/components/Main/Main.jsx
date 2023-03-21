import React from "react";
import { DivInternaUm, DivMain, FirstP, H1ComicsStore, ImageHeroes } from "./styles";
import personagensMini from "../../assets/personagensMini.png";

const Main = () => {
  return (
    <DivMain>
      <DivInternaUm>
        <H1ComicsStore>COMICS</H1ComicsStore>
        <FirstP>Temos diversos quadrinhos, dos mais raros aos mais comuns</FirstP>
      </DivInternaUm>
      <DivInternaUm>
        <ImageHeroes src={personagensMini} alt='Imagem dos personagens da Marvel'/>
        <H1ComicsStore>STORE</H1ComicsStore>
      </DivInternaUm>
      <div>
        <p>Todos os nossos produtos.</p>
        <input placeholder="Pesquise seu quadrinho aqui"/>
      </div>
    </DivMain>
  );
};

export default Main;
