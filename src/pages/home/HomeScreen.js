import React, {useState, useEffect} from 'react'

import {Link} from 'react-router-dom'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import TextoSite from '../../components/TextoSIte'
import CardCategoria from '../../components/CardCategoria'

import './HomeScreen.css'

import * as CategoriaApi from '../../services/CategoriaApi'

export default () => {
  
  const [listaCategorias, setListaCategorias] = useState([])

  useEffect(() => {
    carregarCategorias()
  }, [])

  const carregarCategorias = async () => {
    const categorias = await CategoriaApi.getAll()

    console.log("Executou o useEffect", categorias)
    setListaCategorias(categorias)
  }

  return(
    <div data-testid='home-screen'>
      <Header />
      <section>
        <article>
          <TextoSite texto="Texto que introduz o negócio e o serviço para o usuário e permite ao usuário navegar para qualquer uma das quatro categorias de produtos." />
        </article>
        <aside>
          {
            listaCategorias.map(c =>  
              <Link to={'/categorias/' + c.id}>
                <CardCategoria
                  nome={c.nome}
                  img={c.img128}
                />
              </Link>
            )
          }
        </aside>
      </section>
      <Footer />
    </div>
  )
}