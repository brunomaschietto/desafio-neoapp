import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import api from "../../utils/services/api";
import { DivComInfos, DivContainerInfos, DivInternaInfos, ImgCardInfos } from "./styles";

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
      console.log(response);
      setComicsInfos(response.data.data.results[0]);
    } catch (error) {
      console.log(error);
    }
  };
  const formataDinheiro = () => {
    if (comicsInfos?.prices[0].price === 0) {
      return comicsInfos?.prices[0].price + 21.5;
    } else {
      return (comicsInfos?.prices[0].price * 5).toFixed(2);
    }
  };

  return (
    <>
      <Header />
      <DivContainerInfos>
        <DivComInfos>
          <ImgCardInfos
            src={`${comicsInfos?.thumbnail.path}.${comicsInfos?.thumbnail.extension}`}
            alt={comicsInfos?.title}
          />
          <DivInternaInfos>
            <h1>{comicsInfos?.title}</h1>
            <div>
              <h2>Descrição:</h2>
              {comicsInfos?.description === "" ? (
                <p>Indisponivel</p>
              ) : (
                <p>{comicsInfos?.description}</p>
              )}
            </div>
            <h2>R$ {formataDinheiro()}</h2>
          </DivInternaInfos>
        </DivComInfos>
      </DivContainerInfos>
    </>
  );
};

export default InfosPage;
