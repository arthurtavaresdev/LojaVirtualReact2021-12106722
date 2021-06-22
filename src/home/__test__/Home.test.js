import React from 'react'
import {MemoryRouter} from 'react-router-dom'
import {getByAltText, render, wait} from '@testing-library/react'
import HomeScreen from '../HomeScreen'
import * as CategoriaApi from '../CategoriaApi'

test('Validar fotografia da tela', () => {
    const {getByTestId} = render(<HomeScreen />)
    const div = getByTestId('home-screen')

    expect(div).toMatchSnapshot()
})

test('Quando a API devolver 1 categoria, esta deve ser exibida', async () => {
    CategoriaApi.getAll = jest.fn(() => {
        console.log('Chamou o CategoriaApi.getAll Falso')
        return [{
            id: 1,
            nome: 'Android Teste',
            ativa: true,
            img64: 'http://img64.png',
            img128: 'http://img128.png',
            img256: 'http://img256.png',
        }]
    })

    const {getByText} = render(<HomeScreen />, {wrapper: MemoryRouter})

    await wait(() => getByText('Android Teste'))

    expect(getByText('Android Teste')).toBeInTheDocument()
})