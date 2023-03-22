import React, { useContext, useEffect } from "react";
import {
  DivCTA,
  DivDosCards,
  DivInternaUm,
  DivMain,
  FirstP,
  H1ComicsStore,
  ImageHeroes,
} from "./styles";
import personagensMini from "../../assets/personagensMini.png";
import { GlobalContext } from "../../contexts/GlobalContext";
import Cards from "../Cards/Cards";

const Main = () => {
  const context = useContext(GlobalContext);
  const { comics } = context;

  return (
    <DivMain>
      <DivInternaUm>
        <H1ComicsStore>COMICS</H1ComicsStore>
        <FirstP>
          Temos diversos quadrinhos, dos mais raros aos mais comuns
        </FirstP>
      </DivInternaUm>
      <DivInternaUm>
        <ImageHeroes
          src={personagensMini}
          alt="Imagem dos personagens da Marvel"
        />
        <H1ComicsStore>STORE</H1ComicsStore>
      </DivInternaUm>
      <DivCTA>
        <h1>Temos abaixo todos os nossos produtos.</h1>
        <input placeholder="Pesquise seu quadrinho aqui" />
        <DivDosCards>
          {comics.map((comic) => {
            return <Cards key={comic.id} comic={comic} />;
          })}
        </DivDosCards>
      </DivCTA>
    </DivMain>
  );
};

export default Main;
