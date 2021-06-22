import React from 'react'

import './TabelaProdutos.css'

export default ({idCategoria, lista, addProduto}) => (
  <table>
      <caption>Produtos da categoria {idCategoria}</caption>
      <thead>
        <tr>
          <th>Imagem</th>
          <th>Nome</th>
          <th>Preço</th>
          <th>Ação</th>
        </tr>
      </thead>
      <tbody>
        {
          lista.map(l => 
            <tr>
              <td>
                <img src={l.img} alt={l.nome} />
              </td>
              <td>
                <p>{l.nome}</p>
                <p>{l.descricao}</p>
              </td>
              <td>R$ {l.preco}</td>
              <td><button onClick={() => addProduto(l)}>Comprar</button></td>
            </tr>
          )
        }
      </tbody>
    </table>
)