//se=if
//for=para
//while=enquanto
//console.log=imprimir na tela
//&&=e
//===  =  comparação na condição
//==  =  comparação
//||=ou
//i++=incremento
//let=declaração de variável 

function se(n){
    if (n <= 10){
       console.log("É criança")
    } else if (n >= 11 && n <= 18){
        console.log("Você é aborrecente")
    } else if (n === 65){
        console.log("Você se aposentou")
    } else if(n == 70 || n == 90){
        console.log("Você é idoso")
    } else {
        console.log("Tu não se encaixa")
    }
}

function para(n){
    for(let i=0; i<n; i++){
        if (i == 10){
            console.log("É criança")
            break
        } else {
            console.log("Tu não se encaixa")
    }
}
}

function enquanto(n){
    let i=0
    while (i<n){
        i++
        if (i == 10){
            console.log("É criança")
            break
        } else {
            console.log("Tu não se encaixa")
         }
    }
}

function facaenq(n){
    let i=0
    do{
        i++
        if (i == 10){
            console.log("É criança")
            break
        } else {
            console.log("Tu não se encaixa")
         }
    } while (n==10)
}

function caso(n){
    switch(n){
        case 1: console.log("Você escolheu 1")
        break
        case 2: console.log("Você escolheu 2")
        break
        default: console.log("Escolha outra")
    
    }
}