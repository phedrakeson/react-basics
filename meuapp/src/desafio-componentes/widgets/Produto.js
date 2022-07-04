import React from 'react'

const Produto = ({ nome, propriedades }) => {
  return (
    <div style={{ border: '1px solid', padding: '1rem', marginTop: '1rem' }}>
      <p>{nome}</p>
      <ul>
        {propriedades.map(propriedade => (
          < li key={propriedade} > {propriedade}</li>
        ))}
      </ul>
    </div >
  )
}

export default Produto