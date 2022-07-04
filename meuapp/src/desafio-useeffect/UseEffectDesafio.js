import React from 'react'
import Produto from './Produto';

function UseEffectDesafio() {
  const [produto, setProduto] = React.useState(null);
  const items = ['Notebook', 'Smartphone'];

  React.useEffect(() => {
    const produtoCache = window.localStorage.getItem('produto');
    if (produtoCache) setProduto(produtoCache);
  }, []);

  React.useEffect(() => {
    if (produto) window.localStorage.setItem('produto', produto);
  }, [produto])


  return (
    <section>
      <h1>Preferência: {produto}</h1>
      {
        items.map(item => (
          <button key={item} onClick={() => setProduto(item.toLowerCase())}>{item}</button>
        ))
      }
      <Produto produto={produto} />
    </section>
  )
}

export default UseEffectDesafio