const nome = "Rodolfo"

const salario = 2000

const salarioFinal = (salario) *1.18

const salarioFixado = salarioFinal.toFixed(1)


console.log("Bem vindo " + nome)
console.log("Seu novo salario é = " + salarioFixado) 
if(salarioFixado >= 3000) {console.log("Você devera pagar imposto de renda")}
   else {console.log("Você não devera pagar imposto de renda")}