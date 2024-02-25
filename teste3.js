function isValidSequence(str) {
    const stack = [];
    const pairs = {
        '{': '}',
        '[': ']',
        '(': ')'
    };

    // A ideia aqui é monitorar os ítens que entram na stack.
    // Com isso, a cada verificação de ítem de fechamento, podemos comparar com o último ítem adicionado à stack. 
    // Já que ele é uma chave de dentro do objeto, o seu valor deve ser de fechamento, do contrário, retornamos falso.

    for (let item of str) {
        if (item === '{' || item === '[' || item === '(') {
            stack.push(item);
        } else {
            const lastOpened = stack.pop();
            if (item !== pairs[lastOpened]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}
