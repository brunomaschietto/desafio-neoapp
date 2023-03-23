import React, { useEffect, useState } from "react";
import { GlobalStyled } from "../GlobalStyled";
import Router from "./routes/Router";
import api from './utils/services/api';
import { GlobalContext } from "./contexts/GlobalContext";

const App = () => {
  const [comics, setComics] = useState([]);
  const [comicsInfos, setComicsInfos] = useState([])
  const [pesquisa, setPesquisa] = useState('');
  const [count, setCount] = useState(0);
  const [pagesNumber, setPagesNumber] = useState(0);

  useEffect(() => {
    fetchComics();
  }, [count]);


  const fetchComics = async () => {
    try {
      const response = await api.get(`/v1/public/comics?limit=12&offset=${count * 12}`);
      setComics(response.data.data.results);
      setPagesNumber(response.data.data.total);
    } catch (error) {
      console.log(error);
    }
  };


  const context = {
    comics,
    setComics,
    pesquisa, 
    setPesquisa,
    count,
    setCount,
    pagesNumber
  };

  return (
    <GlobalContext.Provider value={context}>
      <Router />
    </GlobalContext.Provider>
  );
};

export default App;
