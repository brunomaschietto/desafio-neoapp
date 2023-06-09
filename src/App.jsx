import React, { useEffect, useState } from "react";
import { GlobalStyled } from "../GlobalStyled";
import Router from "./routes/Router";
import api from "./utils/services/api";
import { GlobalContext } from "./contexts/GlobalContext";

const App = () => {
  // Estado pra armazenar os quadrinhos
  const [comics, setComics] = useState([]);
  // Estado para armazenar a busca dos quadrinhos
  const [pesquisa, setPesquisa] = useState("");
  // Estado para armazenar o contador de itens por página
  const [count, setCount] = useState(0);
  // Estado para armazenar o número de páginas
  const [pagesNumber, setPagesNumber] = useState(0);
  // Estado para armazenar os itens do carrinho
  const [carrinho, setCarrinho] = useState([]);
  // Estado para armazenar o cupom de desconto
  const [cupom, setCupom] = useState("");
  // Estado para armazenar se esta usando cupom ou não
  const [usandoCupom, setUsandoCupom] = useState(false);

  useEffect(() => {
    fetchComics();
  }, [count]);

  const fetchComics = async () => {
    try {
      const response = await api.get(
        `/v1/public/comics?limit=10&offset=${count * 10}`
      );
      const dados = response.data.data.results;
      const lenArray = dados.length;
      const qrdPercent = lenArray * 0.1;
      for (let index = 0; index < dados.length; index++) {
        //const element = array[index];
        let obj = dados[index];
        obj["tipo"] = "comum";
      }
      for (let index = 0; index < qrdPercent; index++) {
        //const element = array[index];
        let numToAlt = Math.floor(Math.random() * lenArray - 1);
        let obj = dados[numToAlt];
        obj["tipo"] = "raro";
      }
      console.log(dados);
      setComics(dados);
      setPagesNumber(response.data.data.total);
    } catch (error) {
      console.log(error);
    }
  };

  const enviarCarrinho = (id) => {
    const i = carrinho.findIndex((item) => item.id === id);
    if (i !== -1) {
      const novoCarrinho = [...carrinho];
      // console.log(novoCarrinho);
      novoCarrinho[i] = {
        ...novoCarrinho[i],
        quantidadeTotal: novoCarrinho[i].quantidadeTotal + 1,
      };
      // console.log(novoCarrinho);
      setCarrinho(novoCarrinho);
    } else {
      const produtoEncontrado = comics.find((comic) => comic.id === id);
      const novoProduto = { ...produtoEncontrado, quantidadeTotal: 1 };
      setCarrinho([...carrinho, novoProduto]);
    }
    console.log(carrinho);
  };

  function onClickDelete(id) {
    const carrinhoVazio = carrinho.filter((item) => item.id !== id);
    setCarrinho(carrinhoVazio);
  }

  const onClickDiminuirQuantidade = (id) => {
    const i = carrinho.findIndex((item) => item.id === id);
    if (carrinho[i].quantidadeTotal > 1) {
      const novoCarrinho = [...carrinho];
      novoCarrinho[i] = {
        ...novoCarrinho[i],
        quantidadeTotal: novoCarrinho[i].quantidadeTotal - 1,
      };
      setCarrinho(novoCarrinho);
    } else {
      const carrinhoSemItem = carrinho.filter((item) => item.id !== id);
      setCarrinho(carrinhoSemItem);
    }
  };

  const onClickAumentarQuantidade = (id) => {
    const i = carrinho.findIndex((item) => item.id === id);
    if (carrinho[i].quantidadeTotal < 10) {
      const novoCarrinho = [...carrinho];
      novoCarrinho[i] = {
        ...novoCarrinho[i],
        quantidadeTotal: novoCarrinho[i].quantidadeTotal + 1,
      };
      setCarrinho(novoCarrinho);
    } else {
      alert("Só é permitido comprar 10 itens de cada produto por pessoa");
    }
  };

  const adicionarCupom = () => {
    const cupomValido = cupom.toUpperCase();

    if (cupomValido === "VALE10%") {
      setCupom(cupomValido);
      setUsandoCupom(true);
    }
  };

  const formataDinheiro = (item) => {
    if (item.prices[0].price === 0) {
      return item.prices[0].price + 21.5;
    } else {
      return (item.prices[0].price * 5).toFixed(2);
    }
  };
  const concluirPedido = () => {
    setCarrinho([]);
    setUsandoCupom(false);
    alert("Pedido finalizado com sucesso!")
  };

  const context = {
    comics,
    setComics,
    pesquisa,
    setPesquisa,
    count,
    setCount,
    pagesNumber,
    carrinho,
    setCarrinho,
    cupom,
    setCupom,
    usandoCupom,
    concluirPedido,
    enviarCarrinho,
    onClickDelete,
    onClickDiminuirQuantidade,
    onClickAumentarQuantidade,
    adicionarCupom,
    formataDinheiro,
  };

  return (
    <GlobalContext.Provider value={context}>
      <Router />
    </GlobalContext.Provider>
  );
};

export default App;
