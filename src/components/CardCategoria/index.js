import React from 'react'
import './CardCategoria.css'

export default ({nome, img}) => (
  <div className="card">
    <h6>{nome}</h6>
    <img src={img} alt={nome} />
  </div>
)