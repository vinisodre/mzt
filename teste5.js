// Para a resolução desta atividade, tive que lembrar das aulas de matemática do segundo grau, estudo das probablilidades. 

//Usei um fatorial, que é uma função recursiva, ou seja, a função era chamada dentro dela mesma e assim como em um loop foi pssível multiplicar de forma decrescente todos os números.

function totalPossibilities(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * totalPossibilities(n - 1);
    }
}

const test = totalPossibilities(5)

console.log(test)