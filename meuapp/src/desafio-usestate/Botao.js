import React from 'react'

function Botao({ produto, setProduto }) {
  const URL = 'https://ranekapi.origamid.dev/json/api/produto/'
  async function handleClick() {
    setProduto(null);
    const resultado = await fetch(URL + produto);
    const valor = await resultado.json();
    setProduto(valor);
  }
  return (
    <button onClick={handleClick}>Visualizar {produto}</button>
  )
}

export default Botao