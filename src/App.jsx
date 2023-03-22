import React, { useEffect, useState } from "react";
import { GlobalStyled } from "../GlobalStyled";
import Router from "./routes/Router";
import api from './utils/services/api';
import { GlobalContext } from "./contexts/GlobalContext";

const App = () => {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    fetchComics();
  }, []);

  const fetchComics = async (n) => {
    try {
      const response = await api.get(`/v1/public/comics?limit=15&offset=${n}`);
      setComics(response.data.data.results);
      //   setPagesNumber(response.data.data.total);
    } catch (error) {
      console.log(error);
    }
  };

  const context = {
    comics,
    setComics,
  };

  return (
    <GlobalContext.Provider value={context}>
      <Router />
    </GlobalContext.Provider>
  );
};

export default App;
