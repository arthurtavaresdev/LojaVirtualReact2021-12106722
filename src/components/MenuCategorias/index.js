import React from 'react'
import {useHistory} from 'react-router-dom'

import './MenuCategorias.css'

export default ({lista = []}) => {

  const history = useHistory()

  return (
    <ul class="menu">
      {
        lista.map(l =>  
          <li class="menuitem" 
		  onClick={() => history.push('/categorias/' + l.id)}
		  >
            {l.nome}
          </li>
        )
      }
    </ul>
  )
}