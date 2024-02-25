function isDuplicated(array) {
  const itemsInArray = {};
  const duplicated = [];

  array.forEach((item) => {
    if (itemsInArray[item] === undefined) {
      itemsInArray[item] = 1;
    } else if (itemsInArray[item] === 1) {
      duplicated.push(item);
      itemsInArray[item] = 2;
    }
  });
  console.log(itemsInArray);
  console.log(duplicated);
  return duplicated;
}

const arrayTest = [4, 5, 5, 7, 7, 7, 33, 33, 3];
const test = isDuplicated(arrayTest);

console.log(test);

// Aqui precisei fazer um loop com verificação. Ao passar pelo array, ele verificava os ítems de itemsInArray, a cada iteração ele adiciona o valor 1 a cada ítem.

//Ao continuar a iteração, se o ítem possuir valor 1, ele considera duplicado e adiciona no array duplicated, atribunto ao intem o valor 2, para que em uma nova iteração ele nao seja adicionado à duplicated novamente, criando assim um array de valores repetidos únicos.
