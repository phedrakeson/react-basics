import React from 'react'
import Botao from './Botao'

function UseStateDesafio() {
  const [produto, setProduto] = React.useState(null);
  const produtos = ['tablet', 'smartphone', 'notebook'];
  return (
    <section>
      {
        produtos.map(v => (
          <Botao produto={v} key={v} setProduto={setProduto} />
        ))
      }
      {!produto && <p>Carregando...</p>}
      {produto && (
        <section>
          <p>Nome: {produto.nome}</p>
          <p>Preço: R$ {produto.preco}</p>
        </section>
      )}
    </section>
  )
}

export default UseStateDesafio