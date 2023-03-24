import React, { useContext, useEffect } from "react";
import {
  DivAmarelaEscura,
  DivCTA,
  DivDosCards,
  DivInternaDois,
  DivInternaUm,
  DivMain,
  FirstP,
  H1ComicsStore,
  ImageHeroes,
  InputPesquisaQuadrinhos,
} from "./styles";
import metadeEsquerda from "../../assets/metadeEsquerda.png";
import metadeDireita from "../../assets/metadeDireita.png";
import { GlobalContext } from "../../contexts/GlobalContext";
import Cards from "../Cards/Cards";

const Main = () => {
  const context = useContext(GlobalContext);
  const { comics, pesquisa, setPesquisa, count, setCount, pagesNumber } =
    context;

  return (
    <DivMain>
      <DivInternaUm>
        <H1ComicsStore>COMICS STORE</H1ComicsStore>
      </DivInternaUm>
      <DivInternaDois>
        <FirstP>
          Diversos quadrinhos: dos mais raros aos mais comuns
        </FirstP>
        <div>
          <ImageHeroes
            src={metadeEsquerda}
            alt="Imagem dos personagens da Marvel"
          />
          <ImageHeroes
            src={metadeDireita}
            alt="Imagem dos personagens da Marvel"
          />
        </div>
      </DivInternaDois>
      <DivCTA>
        <DivAmarelaEscura>
          <h1>Conheça nossos produtos.</h1>
          <InputPesquisaQuadrinhos
            onChange={(e) => setPesquisa(e.target.value)}
            value={pesquisa}
            placeholder="Pesquise seu quadrinho aqui"
          />
        </DivAmarelaEscura>
        <DivDosCards>
          {comics
            .filter((comic) => {
              return pesquisa
                ? comic.title.toLowerCase().includes(pesquisa.toLowerCase())
                : comic;
            })
            .map((comic) => {
              return <Cards key={comic.id} comic={comic} />;
            })}
        </DivDosCards>
        <div>
          <button disabled={count === 0} onClick={() => setCount(count - 1)}>
            Prev. Page
          </button>
          <p>{count + 1}</p>
          <button
            disabled={(count + 1) * 12 >= pagesNumber}
            onClick={() => setCount(count + 1)}
          >
            Next Page
          </button>
        </div>
      </DivCTA>
      <DivAmarelaEscura>
        <h1>Promoções</h1>
      </DivAmarelaEscura>
      <DivDosCards>
        {comics.map((comic) => {
          return <Cards key={comic.id} comic={comic} />;
        })}
      </DivDosCards>
    </DivMain>
  );
};

export default Main;
