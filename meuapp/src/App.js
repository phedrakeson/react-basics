import React from "react";
import { GlobalContext } from "./GlobalContext";
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import Array from "./Array";

// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

const App = () => {
  const { dados, limparDados } = React.useContext(GlobalContext);
  const dados2 = luana;
  const situacao = {
    color: dados2.ativa ? 'green' : 'red'
  };

  const totalGasto = () => {
    const compras = dados2.compras.map(compra => Number(compra.preco.replace('R$', '').trim()));
    return compras.reduce((x, y) => x + y);
  }

  return (
    <BrowserRouter>
      <NavLink to='/' end>Página inicial</NavLink>
      <NavLink to='sobre'>Sobre</NavLink>
      <Routes>
        <Route path="''" element={<Array />} />
      </Routes>
      {dados.map(d => (
        <p>{d.nome}</p>
      ))}
      <p>Cliente: {dados2.cliente}</p>
      <p>Idade: {dados2.idade}</p>
      <p >Situação: <span style={situacao}>{dados2.ativa ? 'Ativa' : 'Inativa'}</span></p>
      <p>Total gasto: {totalGasto()}</p>
      {totalGasto() > 10000 && <p style={{ color: 'red' }}>Excedeu o limite de compras!</p>}
    </BrowserRouter>
  );
};

export default App;