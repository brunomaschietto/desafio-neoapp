import styled from "styled-components";

export const DivPai = styled.div`
  padding-top: 10px;
  min-height: 100vh;
  background-color: #fdf2e0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const DivContainerCards = styled.div`
  background-color: white;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 550px;
  overflow-y: auto;
  border-radius: 12px;
  @media (max-width: 550px) {
    width: 320px;
    overflow-x: auto;
  }
`;

export const DivForm = styled.div`
  height: 550px;
  width: 300px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 12px;
  padding: 12px;
`;
export const DivInternaForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const InputCupom = styled.input`
  height: 30px;
  padding: 12px;
`;

export const DivPagamento = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BotaoPagamento = styled.button`
  background-color: black;
  color: #fdf2e0;
  border: none;
  height: 30px;
  cursor: pointer;
`;

export const DivCardCarrinho = styled.div`
  display: flex;
  align-items: center;
  width: 550px;
  gap: 20px;
  @media (max-width: 550px) {
    width: 320px;
    border-bottom: 1px solid black;
    gap: 0;
  }
`;

export const ImgCardCarrinho = styled.img`
  height: 150px;
  width: 100px;
  @media (max-width: 550px) {
    width: 50px;
    height: 80px;
  }
`;

export const DivTodosBotoes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const DivBotoes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const DivLixeira = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  p {
    cursor: pointer;
  }
`;

export const BotaoAddOuDim = styled.p`
  height: 20px;
  width: 20px;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media (max-width: 550px) {
    font-size: 12px;
  }
`;

export const DivBotoesEPreco = styled.div`
  display: flex;
  gap: 50px;
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;

export const ImgLixeira = styled.img`
  height: 30px;
  width: 30px;
  cursor: pointer;
  @media (max-width: 550px) {
    width: 10px;
    height: 10px;
  }
`;

export const DivPreco = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const H2Titulo = styled.h2`
  @media (max-width: 550px) {
    font-size: 12px;
  }
`;

export const PCard = styled.p`
  @media (max-width: 550px) {
    font-size: 12px;
  }
`

export const DivInternaCard = styled.div`
  @media (max-width: 550px) {
    width: 100px;
  }
`

export const PInfos = styled.p`
  @media (max-width: 550px) {
    font-size: 12px;
  }
`