


function acaoBotao() {
    var valor01, valor02, resultado, operacao;
        valor01 = prompt("digite o primeiro valor: ")
    operacao = prompt("digite a operação (+,-,*,/): ")
    valor02 = prompt("digite o segundo valor: ")

    if (operacao == "+"){
        resultado = parseInt(valor01) + parseInt(valor02)
    }else if(operacao == "-"){
        resultado = parseInt(valor01) - parseInt(valor02)
    }else if(operacao == "*"){
        resultado = parseInt(valor01) * parseInt(valor02)
    }else if(operacao == "/"){
        resultado = parseInt(valor01) / parseInt(valor02)
    }
    
    document.getElementById("paragrafo").innerText = "o resultado do cálculo é: "+ resultado  
}


