import styled from "styled-components";

export const MainHeader = styled.header`
    background-color: black;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;
`

export const ImgLogo = styled.img`
    height: 70px;
    width: 100px;
`

export const LinkComics = styled.a`
    font-size: 24px;
`

export const DivCarrinho = styled.div`
    width: 200px;
    display: flex;
    justify-content: space-around;
    gap: 10px;
    div {
        display: flex;
        gap: 10px;
    }
    p {
        font-size: 24px;
    }
    button {
        height: 30px;
        width: 100px;
    }
`
