const nome = "Rodolfo"

const notaPrimeiroBimestre  = 9
const notaSegundoBimestre   = 9
const notaTerceiroBimestre  = 8

const notaFinal = (notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre) / 3

const notaFixada = notaFinal.toFixed(1)

console.log("Bem vindo! " + nome)
console.log("Sua Nota Media final foi = " + notaFixada) 
if(notaFixada >= 8) {console.log("Media final = " + notaFixada + " Parabens você esta Aprovado")}

   else {console.log("Media final = " + notaFixada + " Infelizmente voce foi Reprovado")}