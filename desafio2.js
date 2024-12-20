let vitorias = 5
let derrotas = 2
let nivel

let resultado = saldoDeVitorias(vitorias, derrotas)

function saldoDeVitorias(vitorias, derrotas){
    let saldoRankeada = vitorias - derrotas
    return saldoRankeada
}
 switch(true){
    case (resultado <= 10):
    nivel = "Ferro"
    break

    case (resultado >= 11 && resultado <=20):
    nivel = "Bronze" 
    break

    case (resultado >= 21 && resultado <= 50):
    nivel = "Prata"
    break

    case (resultado >= 51 && resultado <= 80):
    nivel = "Ouro"
    break
    
    case (resultado >= 81 && resultado <=90):
    nivel = "Diamante"
    break

    case(resultado >= 91 && resultado <= 100):
    nivel = "Lendario"
    break

    case(resultado >= 101):
    nivel = "Imortal"
    break

    default:
    console.log("Erro")
 }
 console.log("O Herói tem de saldo de " + resultado + " pontos, e está no nível " + nivel)