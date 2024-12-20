
let vitorias = 31
let derrotas = 3
let nivel

let resultado = saldoDeVitorias(vitorias, derrotas)

function saldoDeVitorias(vitorias, derrotas){
    let saldoRankeada = vitorias - derrotas
    return saldoRankeada
}
if (resultado <= 10){
     nivel = "Ferro"
}else if(resultado >= 11 && resultado <= 20){
     nivel = "Bronze"
}else if(resultado >= 21 && resultado <= 50){
     nivel = "Prata"
}else if(resultado >= 51 && resultado <= 80){
     nivel = "Ouro"
}else if(resultado >= 81 && resultado <= 90){
     nivel = "Diamante"
}else if(resultado >= 91 && resultado <= 100){
     nivel = "Lendário"
}else if(resultado >= 101){
    nivel = "imortal"
}else{
    console.log("Erro")
}
console.log("O Herói tem de saldo de " + resultado + " pontos, e está no nível " + nivel)
