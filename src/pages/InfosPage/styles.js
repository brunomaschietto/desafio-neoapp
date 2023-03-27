import styled from "styled-components";

export const DivContainerInfos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fdf2e0;
  min-height: 100vh;
`;

export const DivComInfos = styled.div`
  display: flex;
  gap: 50px;
`;

export const DivInternaInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
`;

export const ImgCardInfos = styled.img`
  height: 400px;
  width: 250px;
  @media (max-width: 500px) {
    height: 300px;
    width: 150px;
  }
`;
