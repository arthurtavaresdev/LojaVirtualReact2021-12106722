import React from 'react'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import TabelaCompras from '../../components/TabelaCompras'

import './ComprasScreen.css'


export default ({lista}) => {
  return (
    <>
      <Header />
      <nav class="acoes">
        <button>Limpar Carrinho</button>
        <button>Continuar Comprando</button>
        <button>Finalizar Compra</button>
      </nav>
      <div class="total">
        <span>Total da compra:</span>
        <span>R$ 1.587,55</span>
      </div>
      <TabelaCompras 
        lista={lista}
      />
      <Footer />
    </>
  )
}