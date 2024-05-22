function calcularProduto(numeros) {
    return numeros.reduce((total, numero) => total * numero, 1)
}

let numeros = [1, 2, 3, 4, 5];
console.log(calcularProduto(numeros));
