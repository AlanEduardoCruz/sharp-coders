var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


// Lê o próximo valor da entrada (supomos que lines.shift() retorna um valor da entrada)
let tamanho = lines.shift();

// Enquanto o valor lido for um número (ou seja, não for NaN), continue o loop
while (!isNaN(tamanho)) {
    // Inicializa uma variável para armazenar a linha que será impressa
    let linha = "";

    // Itera pelas colunas da matriz (de 0 a tamanho-1)
    for (let i = 0, x = tamanho - 1; i < tamanho; i++, x--) {
        // Inicializa o valor padrão como 3
        let valor = 3;

        // Se o índice da linha for igual ao índice da coluna, define o valor como 1
        if (i === j) valor = 1;

        // Se o índice da coluna for igual ao índice oposto da linha, define o valor como 2
        if (j === x) valor = 2;

        // Adiciona o valor à linha atual
        linha += valor;
    }

    // Imprime a linha no console
    console.log(linha);

    // Lê o próximo valor da entrada para verificar se o loop deve continuar
    tamanho = lines.shift();
}
