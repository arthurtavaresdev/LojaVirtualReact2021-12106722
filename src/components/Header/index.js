import React from 'react'
import logo from '../../assets/img/logo.png'
import './Header.css'

export default ({titulo='Loja Virtual'}) => (
  <header data-testid='main-header'>
    <img src={logo} alt="Logo" />
    <h1>{titulo}</h1>
  </header>
)