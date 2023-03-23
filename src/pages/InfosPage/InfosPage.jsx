import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContext";

const InfosPage = () => {
  const context = useContext(GlobalContext);
  const {comicsInfos, setComicsInfos} = context
  const params = useParams();

  useEffect(() => {
    fetchComicsInfos();
  }, []);

  const fetchComicsInfos = () => {
    axios
      .get(`${BASE_URL}${params.id}`)
      .then((resp) => {
        setPokemonDetails(resp.data);
        console.log(resp.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  return <div>InfosPage</div>;
};

export default InfosPage;
