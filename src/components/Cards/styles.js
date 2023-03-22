import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: lightgrey;
    width: 250px;
    height: 300px;
`

export const CardBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`

export const CardFooter = styled.div`
    display: flex;
    gap: 30px;
`

export const ImgDoCard = styled.img`
    height: 200px;
    width: 250px;
`

export const BotaoDoCard = styled.button`
    width: 80px;
    height: 25px;
    background-color: #fac954;
    border-radius: 20px;
    cursor: pointer;
`