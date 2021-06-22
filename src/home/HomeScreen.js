import React, {useState, useEffect} from 'react'

import {Link} from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import TextoSite from './TextoSite'
import CardCategoria from './CardCategoria'

import './HomeScreen.css'

import * as CategoriaApi from './CategoriaApi'

//import androidImg from './android.png'
//import appleImg from './apple.png'
//import playstationImg from './playstation.png'
//import windowsImg from './windows.png'

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
          <TextoSite />
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