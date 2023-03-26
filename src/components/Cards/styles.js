import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 500px;
  /* box-shadow: 1px 10px 10px; */
  transition: all 0.5s;
  :hover {
    -webkit-filter: drop-shadow(15px 10px 5px rgba(0, 0, 0, 0.5));
    filter: drop-shadow(15px 10px 5px rgba(0, 0, 0, 0.5));
  }
`;

export const CardNovo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  margin-bottom: 1rem;
`

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const CardFooter = styled.div`
  display: flex;
  gap: 30px;
`;

export const ImgDoCard = styled.img`
  height: 400px;
  width: 250px;
`;

export const BotaoDoCard = styled.button`
  width: 100px;
  height: 25px;
  background-color: #fac954;
  border-radius: 12px;
  cursor: pointer;
`;

export const DivInfosCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  h5 {
    width: 250px;
    height: 30px;
  }
`;
