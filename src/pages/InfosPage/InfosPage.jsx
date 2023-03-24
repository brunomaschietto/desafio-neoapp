import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import { GlobalContext } from "../../contexts/GlobalContext";
import api from "../../utils/services/api";

const InfosPage = () => {
  const context = useContext(GlobalContext);
  const {comicsInfos, setComicsInfos} = context
  const params = useParams()

  useEffect(() => {
    fetchComicInfo();
  }, []);

  const fetchComicInfo = async () => {
    try {
        const response = await api.get(`/v1/public/comics/${params.id}`);
        console.log(response.data.data.results);
        setComicsInfos(response.data.data.results);
      } catch (error) {
        console.log(error);
      }
    
  };
  
  return <div>
    <Header />
  </div>;
};

export default InfosPage;
