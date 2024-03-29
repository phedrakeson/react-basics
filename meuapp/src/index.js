import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Array from './Array';
import Header from './desafio-componentes/Header';
import Home from './desafio-componentes/Home';
import Produtos from './desafio-componentes/Produtos';
import UseEffectDesafio from './desafio-useeffect/UseEffectDesafio';
import UseStateDesafio from './desafio-usestate/UseStateDesafio';
import { Slide } from './slide/Slide';

const root = ReactDOM.createRoot(document.getElementById('root'));
const items = [
  { id: 'slide1', text: 'Slide 1' },
  { id: 'slide2', text: 'Slide 2' },
  { id: 'slide3', text: 'Slide 3' },
]
const { pathname } = window.location;

const Pagina = () => {
  if (pathname === '/produtos') {
    return <Produtos />
  } else if (pathname === '/slide') {
    return <Slide slides={items} />
  } else {
    return <Home />
  }
}

root.render(
  <React.StrictMode>
    {/* <UseEffectDesafio /> */}
    {/* <UseStateDesafio /> */}
    {/* <App /> */}
    {/* <Array /> */}
    <section>
      <Header />
      <Pagina />
    </section>
  </React.StrictMode>
);