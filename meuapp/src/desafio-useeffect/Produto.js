import React from 'react'

function Produto({ produto }) {
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    if (produto) {
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
        .then(res => res.json())
        .then(json => setDados(json))
    }
  }, [produto]);

  if (!dados) return null;
  return (
    <section>
      {dados && (
        <>
          <p>{dados.nome}</p>
          <p>R$ {dados.preco}</p>
        </>
      )}
    </section>
  )
}

export default Produto