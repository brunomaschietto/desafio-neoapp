import React, { useEffect, useState } from "react";
import { GlobalStyled } from "../GlobalStyled";
import Router from "./routes/Router";
import api from "./utils/services/api";
import { GlobalContext } from "./contexts/GlobalContext";

const App = () => {
  // Estado pra armazenar os quadrinhos
  const [comics, setComics] = useState([]);
  // Estado pra página de informação de quadrinhos
  const [comicsInfos, setComicsInfos] = useState([]);
  // Estado para armazenar a busca dos quadrinhos
  const [pesquisa, setPesquisa] = useState("");
  // Estado para armazenar o contador de itens por página
  const [count, setCount] = useState(0);
  // Estado para armazenar o número de páginas
  const [pagesNumber, setPagesNumber] = useState(0);
  // Estado para armazenar os itens do carrinho
  const [carrinho, setCarrinho] = useState([]);
  // Estado para armazenar as informações gerais do pedido do cliente
  const [compra, setCompra] = useState([
    {
      itens: [...carrinho],
      desconto: 0,
      frete: 0,
      quantidadeTotal: 0,
      itensTotalCompra: 0,
      compraTotal: 0,
    },
  ]);
  // Estado para armazenar o cupom de desconto
  const [cupom, setCupom] = useState("");
  // Estado para armazenar a quantidade total do carrinho
  const [qtdCarrinho, setQtdCarrinho] = useState(0);

  useEffect(() => {
    fetchComics();
  }, [count]);

  const fetchComics = async () => {
    try {
      const response = await api.get(
        `/v1/public/comics?limit=10&offset=${count * 10}`
      );
      setComics(response.data.data.results);
      setPagesNumber(response.data.data.total);
    } catch (error) {
      console.log(error);
    }
  };

  const enviarCarrinho = (id) => {
    const i = carrinho.findIndex((item) => item.id === id);
    if (i !== -1) {
      const novoCarrinho = [...carrinho];
      novoCarrinho[i] = {
        ...novoCarrinho[i],
        quantidade: novoCarrinho[i].quantidade + 1,
      };
      console.log(novoCarrinho);
      setCarrinho(novoCarrinho);
    } else {
      const produtoEncontrado = comics.find((comic) => comic.id === id);
      const novoProduto = { ...produtoEncontrado, quantidade: 1 };
      setCarrinho([...carrinho, novoProduto]);
    }
  };

  function onClickDelete(id) {
    const carrinhoVazio = carrinho.filter((item) => item.id !== id);
    setCarrinho(carrinhoVazio);
  }

  const onClickDiminuirQuantidade = (id) => {
    const i = carrinho.findIndex((item) => item.id === id);
    carrinho.map((comic) => {
      if (comic.quantidade > 1) {
        const novoCarrinho = [...carrinho];
        novoCarrinho[i] = {
          ...novoCarrinho[i],
          quantidade: novoCarrinho[i].quantidade - 1,
        };
        setCarrinho(novoCarrinho);
      } else {
        const carrinhoSemItem = carrinho.filter((item) => item.id !== id);
        setCarrinho(carrinhoSemItem);
      }
    });
  };

  const onClickAumentarQuantidade = (id) => {
    const i = carrinho.findIndex((item) => item.id === id);
    carrinho.map((comic) => {
      if (comic.quantidade < 10) {
        const novoCarrinho = [...carrinho];
        novoCarrinho[i] = {
          ...novoCarrinho[i],
          quantidade: novoCarrinho[i].quantidade + 1,
        };
        setCarrinho(novoCarrinho);
      } else {
        alert("Só é permitido comprar 10 itens de cada produto por pessoa");
      }
    });
  };

  const context = {
    comics,
    setComics,
    pesquisa,
    setPesquisa,
    count,
    setCount,
    pagesNumber,
    comicsInfos,
    setComicsInfos,
    compra,
    setCompra,
    enviarCarrinho,
    onClickDelete,
    onClickDiminuirQuantidade,
    onClickAumentarQuantidade,
  };

  return (
    <GlobalContext.Provider value={context}>
      <Router />
    </GlobalContext.Provider>
  );
};

export default App;
