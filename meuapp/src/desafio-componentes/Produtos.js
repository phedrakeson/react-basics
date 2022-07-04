import React from 'react'
import PageTitle from './widgets/PageTitle'
import Produto from './widgets/Produto'

const Produtos = () => {
  const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
  ];

  return (
    <>
      <PageTitle texto="Produtos" />
      {
        produtos.map(produto => (
          <Produto key={produto.nome} {...produto} />
        ))
      }
    </>
  )
}

export default Produtos