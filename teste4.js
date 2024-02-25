function anoComMaisTrabalho(matriz) {
//Aqui guardei uma lista de anos, com base nos intervalos fornecidos

    let contador = {};
    for(let i = 0; i < matriz.length; i++) {
        for(let ano = matriz[i][0]; ano <= matriz[i][1]; ano++) {
            if(contador[ano]) {
                contador[ano]++;
            } else {
                contador[ano] = 1;
            }
        }
    }

    //Peguei os anos mais repetidos dentro do contador
    const maisRepetidos = Math.max(...Object.values(contador))
    const anosComMaisTrabalhadores = Object.keys(contador).filter(item => contador[item] === maisRepetidos);
    
    //Optei por mostrar, não uma lista de anos, mas um par de anos, o mais antigo e o mais recente.

    const menorAno = Math.min(...anosComMaisTrabalhadores);
    const maiorAno = Math.max(...anosComMaisTrabalhadores);

    return console.log(`Os anos com mais trabalhadores foram entre ${menorAno} e  ${maiorAno}`);
}


anoComMaisTrabalho([[1960,2005],[1945,2008],[1938,1999]]);


// Os valores de X como o ano que os indívíduos começaram a trabalhar (x>0, x<y );
// Os valores de Y como o ano que os indívíduos se aposentaram (y>0);