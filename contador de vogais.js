const vogais = ['a', 'e', 'i', 'o', 'u'];

const contVogais = (str) => {
    let contador = 0;
    const strLowerCase = str.toLowerCase();
    
    
    for(i = 0; i < strLowerCase.length; i++) {
        for (j = 0; j < vogais.length; j++) {
            if (strLowerCase [i] === vogais [j]){
                contador++;
            }
        }
    }
return contador;
};

console.log(contVogais('Rodolfo'));