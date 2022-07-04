import React from "react";

function Array() {
  const produtos = [
    <li key="e1">Notebook</li>,
    <li key="e2">Notebook</li>,
    <li key="e3">Notebook</li>,
  ];
  const filmes = ['Before Sunrise', 'Before Sunset', 'Before Midnight'];
  const produtos2 = [
    {
      id: 1,
      nome: 'Smartphone',
      preco: 'R$ 2000',
      cores: ['#29d8d5', '#252a34', '#fc3766'],
    },
    {
      id: 2,
      nome: 'Notebook',
      preco: 'R$ 3000',
      cores: ['#ffd045', '#d4394b', '#f37c59'],
    },
    {
      id: 3,
      nome: 'Tablet',
      preco: 'R$ 1500',
      cores: ['#365069', '#47c1c8', '#f95786'],
    },
  ]
  return (
    <>
      {produtos}

      <ul>
        {filmes.map(filme => (
          <li key={filme}>{filme}</li>
        ))}
      </ul>

      <ul>
        {
          produtos2
            .filter(produto => Number(produto.preco.replace('R$ ', '')) > 1500)
            .map(produto => (
              <section key={produto.id}>
                <h1>{produto.nome}</h1>
                <p>Preço: {produto.preco}</p>
                <ul>
                  {produto.cores.map(cor => (
                    <li key={cor} style={{ color: 'white', backgroundColor: cor }}>{cor}</li>
                  ))}
                </ul>
              </section>
            ))
        }
      </ul>
    </>
  )
}

export default Array;