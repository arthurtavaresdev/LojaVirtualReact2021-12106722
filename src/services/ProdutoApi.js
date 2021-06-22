const URL_BASE = 'https://lojavirtual-api--tarleylana.repl.co/api/v1/produtos'

const getByIdCategoria = (idCategoria) => fetch(`${URL_BASE}?idCategoria=${idCategoria}`)
.then(res => res.json())
.catch(err => console.log('Falha ao tentar obter produtos', err.message))

export {
  getByIdCategoria
}