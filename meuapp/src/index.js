import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Array from './Array';
import Header from './desafio-componentes/Header';
import Home from './desafio-componentes/Home';
import Produtos from './desafio-componentes/Produtos';
import UseStateDesafio from './desafio-usestate/UseStateDesafio';

const root = ReactDOM.createRoot(document.getElementById('root'));

const { pathname } = window.location;

const Pagina = () => {
  if (pathname === '/produtos') {
    return <Produtos />
  } else {
    return <Home />
  }
}

root.render(
  <React.StrictMode>
    <UseStateDesafio />
    <App />
    <Array />
    <section>
      <Header />
      <Pagina />
    </section>
  </React.StrictMode>
);