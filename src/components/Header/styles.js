import styled from "styled-components";

export const MainHeader = styled.header`
  position: sticky;
  z-index: 100;
  top: 0;
  background-color: black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  padding: 12px;
`;

export const DivLogo = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
`;

export const ImgLogo = styled.img`
  height: 70px;
  width: 100px;
`;

export const LinkComics = styled.a`
  font-size: 24px;
  cursor: pointer;
`;

export const DivCarrinho = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  p {
    font-size: 24px;
  }
`;

export const BotaoCarrinho = styled.button`
  border: none;
  background-color: none;
`;

export const DivUsuario = styled.div`
  display: flex;
  align-items: center;
  width: 50px;
  gap: 5px;
`;

export const LogosHeader = styled.img`
    height: 48px;
    width: 48px;
`

export const DivCarrrinhoEQtd = styled.div`
  position: relative;
`

export const SpanQtd = styled.span`
  position: absolute;
  text-align: center;
  background-color: red;
  width: 20px;
  border: 1px solid red;
  border-radius: 12px;
`