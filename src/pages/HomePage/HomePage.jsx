import React, { useContext, useEffect } from "react";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import { GlobalContext } from "../../contexts/GlobalContext";
import api from "../../utils/services/api";

const HomePage = () => {
//   const context = useContext(GlobalContext);

//   useEffect(() => {
//     fetchComics();
//   }, []);

//   const fetchComics = async (n) => {
//     try {
//       const response = await api.get(`/v1/public/comics?limit=15&offset=${n}`);
//       context.setComics(response.data.data.results);
//       //   setPagesNumber(response.data.data.total);
//     } catch (error) {
//       console.log(error);
//     }
//   };
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
};

export default HomePage;
