import { useState } from "react";


const GlobalState = () => {
  const [comics, setComics] = useState([]);
  
  return {
    comics,
    setComics
  }
};

export default GlobalState;
