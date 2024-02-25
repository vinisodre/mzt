function numberCheck(number) {
  const testInput = /^[0-9]\d*$/;

  testInput.test(number)
    ? checkOrder(number)
    : console.log(`Input ${number} -> Não é válido`);

  //verifiquei inicialmente se a entrada era um número inteiro positivo. Caso o usuário entrasse com um valor diferente do esperado, a função já retornaria um alerta para dizer que o valor inserido não era válido..

  //sendo válido chamei a função para checar a ordem.

  function checkOrder(number) {
    let isCorrect = true;
    let ordered = true;

    //criei esses dois estados. Caso algum deles fosse colocado como falso, significaria que a verificação encontrou algo como incorreto

    const originalOrder = String(number).split("");
    const sortedUp = [...originalOrder].sort();
    const sortedDown = [...originalOrder].sort((a, b) => b - a);

    //Para verificar digito a dígito, fiz transformações: primeiro transformei o nímero em uma string e depois apliquei split para criar um array com cada dígito separado.

    //criei constantes que depois eu iria utilizar para verificar a ordem, se crescente ou decrescente

    console.log(originalOrder.toString());
    for (let i = 0; i < originalOrder.length - 1; i++) {
      let test = originalOrder[i + 1] - originalOrder[i];
      if (test > 1 || test < -1) {
        isCorrect = false;
      }
    }

    //Aqui eu verifiquei as requências do array, sempre o posterior - o antecessor.
    //Para não ter que fazer isso duas vezes (no ascendente e descendente) coloquei a regra de test que verificava se o valor da diferença estava ente -1 e 1

    //Dessa forma verifiquei se havia continuidade entre os ítem do array. Caso pulasse mais de um dígito, já retornaria como falso.

    //Por último verifiquei se o array estava em ordem crescente ou decrescente. Um array que sobe e desce sempre seria considerado fora de ordem

    if (
      originalOrder.toString() !== sortedUp.toString() &&
      originalOrder.toString() !== sortedDown.toString()
    ) {
      ordered = false;
    }

    if (isCorrect && ordered) {
      console.log(`Input ${number} -> Está ordenado`);
    } else {
      console.log(`Input ${number} -> Não está ordenado`);
    }
  }
}

numberCheck(12345678);

//Fiquei um bom tempo nesse problema, o que me custou desenvolvimento de outras partes do teste, mas foi importantante terminá-lo, pois não o julguei simple e consegui cncluí-lo.
