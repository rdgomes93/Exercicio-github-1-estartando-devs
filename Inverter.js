
const vogais = ["a","e","i","o","u"];
const inverterString = (str) =>{
    let strInvertida = "";
    for(i = str.length - 1 ; i > -1; i--)
    {
        strInvertida += str[i]
    }
    return strInvertida
}

inverterString('Rodolfo')
 [R,o,d,o,l,f,o]
