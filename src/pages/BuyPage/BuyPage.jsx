import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import { GlobalContext } from "../../contexts/GlobalContext";
import { goToHomePage } from "../../routes/coordinator";
import iconeLixeira from "../../assets/iconeLixeira.svg";
import {
  BotaoAddOuDim,
  BotaoPagamento,
  DivBotoes,
  DivBotoesEPreco,
  DivCardCarrinho,
  DivContainerCards,
  DivForm,
  DivInternaForm,
  DivLixeira,
  DivPagamento,
  DivPai,
  DivPreco,
  DivTodosBotoes,
  ImgCardCarrinho,
  ImgLixeira,
  InputCupom,
} from "./styles";

const BuyPage = () => {
  const navigate = useNavigate();
  const context = useContext(GlobalContext);
  const {
    carrinho,
    cupom,
    setCupom,
    usandoCupom,
    adicionarCupom,
    concluirPedido,
    onClickDelete,
    onClickDiminuirQuantidade,
    onClickAumentarQuantidade,
    formataDinheiro,
  } = context;
  const subtotal = carrinho.reduce(
    (acc, item) => acc + formataDinheiro(item) * item.quantidadeTotal,
    0
  );
  const valorDesconto = (usandoCupom ? subtotal * 0.1 : 0).toFixed(1);
  const valorTotal = subtotal - valorDesconto;
  console.log(carrinho);
  return (
    <div>
      <Header />
      <DivPai>
        <DivContainerCards>
          {carrinho.map((item) => (
            <DivCardCarrinho key={item.id}>
              <ImgCardCarrinho
                src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
              />
              <div>
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.tipo}</p>
                </div>
                <DivBotoesEPreco>
                  <DivTodosBotoes>
                    <DivBotoes>
                      <BotaoAddOuDim
                        onClick={() => onClickDiminuirQuantidade(item.id)}
                      >
                        -
                      </BotaoAddOuDim>
                      <p>{item.quantidadeTotal}</p>
                      <BotaoAddOuDim
                        onClick={() => onClickAumentarQuantidade(item.id)}
                      >
                        +
                      </BotaoAddOuDim>
                    </DivBotoes>
                    <DivLixeira>
                      <ImgLixeira
                        onClick={() => onClickDelete(item.id)}
                        src={iconeLixeira}
                      />
                      <p onClick={() => onClickDelete(item.id)}>Delete</p>
                    </DivLixeira>
                  </DivTodosBotoes>
                  <DivPreco>
                    <p>Preço:</p>
                    <p>{formataDinheiro(item)}</p>
                  </DivPreco>
                </DivBotoesEPreco>
              </div>
            </DivCardCarrinho>
          ))}
        </DivContainerCards>
        <DivForm>
          <DivInternaForm>
            <InputCupom
              onChange={(e) => setCupom(e.target.value)}
              value={cupom}
              placeholder="Digite o seu cupom de desconto"
            />
            <BotaoPagamento onClick={adicionarCupom}>
              Aplicar cupom
            </BotaoPagamento>
            <DivPagamento>
              <p>Subtotal:</p>
              <p>{subtotal}</p>
            </DivPagamento>
            <DivPagamento>
              <p>Cupom de desconto:</p>
              <p>{valorDesconto}</p>
            </DivPagamento>
            <DivPagamento>
              <p>Total a pagar:</p>
              <p>{valorTotal}</p>
            </DivPagamento>
          </DivInternaForm>
          <BotaoPagamento onClick={() => concluirPedido()}>Concluir pedido</BotaoPagamento>
        </DivForm>
      </DivPai>
    </div>
  );
};

export default BuyPage;
