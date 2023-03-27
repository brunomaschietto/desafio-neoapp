import styled from "styled-components";

export const DivMain = styled.div`
  background-color: #fdf2e0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const DivInternaUm = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

export const DivInternaDois = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

export const DivImgMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`
export const H1ComicsStore = styled.h1`
  font-size: 200px;
  text-shadow: 10px 20px #fac954;
  @media (max-width: 900px) {
    font-size: 120px;
  }
  @media (max-width: 530px) {
    font-size: 80px;
  }
  @media (max-width: 360px) {
    font-size: 40px;
  }
`;

export const ImageHeroes = styled.img`
  height: 350px;
  @media (max-width: 500px) {
    display: flex;
    align-items: center;
    height: 200px;
  }
`;

export const FirstP = styled.p`
  font-size: 20px;
  @media (max-width: 420px) {
    font-size: 12px;
  }
`;

export const DivDosCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

export const DivCTA = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export const InputPesquisaQuadrinhos = styled.input`
  width: 363px;
  height: 40px;
  border: 1px solid #d5d8de;
  border-radius: 4px;
  color: black;
  font-size: 16px;
  box-shadow: none;
  padding-left: 12px;
  @media (max-width: 500px) {
    width: 200px;
  }
`;

export const DivAmarelaEscura = styled.div`
  background-color: #fac954;
  width: 1400px;
  height: 15vh;
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 1400px) {
    width: 1000px;
  }
  @media (max-width: 1000px) {
    width: 500px;
  }
  @media (max-width: 500px) {
    width: 300px;
  }
`;

export const DivBotoesDePagina = styled.div`
  display: flex;
  gap: 10px;
`;

export const BotaoTrocaPagina = styled.button`
  background-color: black;
  color: white;
  width: 20px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
`;
