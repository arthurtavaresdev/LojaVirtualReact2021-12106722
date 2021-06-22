import React, {useState, useEffect} from 'react'

import {useParams, useHistory} from 'react-router-dom'

import Header from '../../components/Header'
import MenuCategorias from '../../components/MenuCategorias'
import TabelaProdutos from '../../components/TabelaProdutos'
import Footer from '../../components/Footer'

import * as CategoriaApi from '../../services/CategoriaApi'
import * as ProdutoApi from '../../services/ProdutoApi'

import './CategoriaScreen.css'

export default ({addProduto}) => {
  const {id} = useParams()
  const history = useHistory()
  const [listaCategorias, setListaCategorias] = useState([])
  const [listaProdutos, setListaProdutos] = useState([])

  useEffect(() => {
    const load = async () => {
      const categorias = await CategoriaApi.getAll()
      console.log('Executou o carregarCategorias: ', categorias)
      setListaCategorias(categorias)
    }

    load()
  }, [])

  useEffect(() => {
    const load = async () => {
      const produtos = await ProdutoApi.getByIdCategoria(id)
      console.log('Executou o carregarProdutos: ', produtos)
      setListaProdutos(produtos)
    }

    load()
  }, [id])

  return (
    <>
      <Header />
      <nav>
        <button onClick={() => history.push('/compras')}>Ver carrinho</button>
      </nav>
      <nav>
        <MenuCategorias 
          lista={listaCategorias}
        />
      </nav>
      <aside>
        <TabelaProdutos 
          idCategoria={id}
          lista={listaProdutos}
          addProduto={addProduto}
        />
      </aside>
      <Footer />
    </>
  )
}