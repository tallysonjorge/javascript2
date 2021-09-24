/*
  nome: caractere
    idade, limite, contador: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
    escreva("digite a quantidade de vezes que vai ser verificada a idade: ")
    leia(limite)
    contador := 0
    enquanto contador < limite faca
        escreva ("digite o nome da pessoa: ")
        leia (nome)
        escreva("digite a idade de: ", nome, ":")
        leia (idade)
        se idade > 18 entao
           escreval (nome, " é maior de idade")
        senao
           escreval (nome, " é menor de idade")
           fimse
    contador := contador + 1
    fimenquanto
*/
function acaoBotao() {
    var nome, idade, limite, contador
    limite = prompt("digite a quantidade de vezes que vai ser verificada a idade: ")
    contador = 0
    while (contador < limite){
        nome = prompt("digite o nome da pessoa: ")
        idade = prompt("digite a idade de " + nome + ":")
        if ( idade > 18 )
            document.getElementById("paragrafo").innerText = nome + " é maior de idade"
        else
        document.getElementById("paragrafo").innerText = nome + " é menor de idade"
        contador++
    }
}