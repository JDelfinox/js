function calcularTinta(tamanhoArea) {
  const coberturaPorLitro = 3;
  const litrosPorLata = 18;
  const precoPorLata = 80;

  const litrosNecessarios = tamanhoArea / coberturaPorLitro;

  const latasNecessarias = Math.ceil(litrosNecessarios / litrosPorLata);

  const precoTotal = latasNecessarias * precoPorLata;

  return { latasNecessarias, precoTotal };
}

function main() {
  const tamanhoArea = parseFloat(
    prompt("Informe o tamanho da área a ser pintada em metros quadrados:")
  );

  const { latasNecessarias, precoTotal } = calcularTinta(tamanhoArea);

  alert(`Quantidade de latas de tinta a serem compradas: ${latasNecessarias}`);
  alert(`Preço total: R$ ${precoTotal.toFixed(2)}`);
}

main();
