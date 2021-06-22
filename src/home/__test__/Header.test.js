import React from 'react'
import {render} from '@testing-library/react'
import Header from '../Header'

test('Quero que na home existe um cabeçalho com o titulo "Loja Virtual"', () => {
  const {getByText} = render(<Header />)
  const h1 = getByText(/Loja Virtual/)

  expect(h1).toBeInTheDocument()
})

test('Quero que na tela de categorias, exiba um cabeçalho com o titulo da categoria', () => {
  const {getByText} = render(<Header titulo='Loja Virtual - Categoria Android' />)
  const h1 = getByText(/Loja Virtual - Categoria Android/)

  expect(h1).toBeInTheDocument()
})

test('Quero visualizar uma image da logo do site', () => {
  const {getByAltText} = render(<Header />)
  const img = getByAltText("Logo")

  expect(img).toBeInTheDocument()
  expect(img).toHaveAttribute('src', 'logo.png')
})

test('Teste de validação de foto da tela', () => {
  const {getByTestId} = render(<Header />)
  const header = getByTestId('main-header')
  expect(header).toMatchSnapshot()
})