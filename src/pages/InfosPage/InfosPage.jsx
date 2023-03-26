import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import api from "../../utils/services/api";
import { DivComInfos, DivContainerInfos } from "./styles";

const InfosPage = () => {
  // Estado pra página de informação de quadrinhos
  const [comicsInfos, setComicsInfos] = useState();
  const params = useParams();

  useEffect(() => {
    fetchComicInfo();
  }, []);

  const fetchComicInfo = async () => {
    try {
      const response = await api.get(`/v1/public/comics/${params.id}`);
      console.log(response)
      setComicsInfos(response.data.data.results[0]);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Header />
      <DivContainerInfos>
        <DivComInfos>
          <img
            src={`${comicsInfos?.thumbnail.path}.${comicsInfos?.thumbnail.extension}`}
            alt={comicsInfos?.title}
          />
          <h1>{comicsInfos?.title}</h1>
        </DivComInfos>
      </DivContainerInfos>
    </>
  );
};

export default InfosPage;
