function inverteString(str) {
    // Inicializa uma variável para armazenar a string invertida
    let invertedString = "";
    
    // Percorre a string original de trás para frente
    for (let i = str.length - 1; i >= 0; i--) {
        // Adiciona o caractere atual ao final da string invertida
        invertedString += str.charAt(i);
    }
    
    // Retorna a string invertida
    return invertedString;
}

// Exemplo de uso da função
const stringOriginal = "Hello, world!";
const stringInvertida = inverteString(stringOriginal);
console.log("String original:", stringOriginal);
console.log("String invertida:", stringInvertida);
