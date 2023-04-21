// Funções aceitam qualquer tipo de dado como argumento
function imprimirDado (dado){
    console.log(dado())
}

// imprimirDado(1)
// imprimirDado('texto')
// imprimirDado(true)
// imprimirDado({nome: 'joão'})
// imprimirDado([1, 2, 3])

imprimirDado (function () {
    return 'Olá mundo'
})
