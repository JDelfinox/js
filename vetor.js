// Função para ler o vetor de números inteiros
function lerVetor() {
    let vetor = [];
    for (let i = 0; i < 5; i++) {
      let numero = parseInt(prompt(`Digite o ${i + 1}º número inteiro:`));
      vetor.push(numero);
    }
    return vetor;
  }
  
  // Função para ordenar o vetor em ordem crescente
  function ordenarVetor(vetor) {
    return vetor.sort((a, b) => a - b);
  }
  
  // Função para mostrar o vetor de números inteiros
  function mostrarVetor(vetor) {
    console.log("Vetor de números inteiros em ordem crescente:");
    console.log(vetor);
  }
  
  // Programa principal
  function main() {
    let vetor = lerVetor();
    let vetorOrdenado = ordenarVetor(vetor);
    mostrarVetor(vetorOrdenado);
  }
  
  // Executar o programa principal
  main();
  console.log(vetor)