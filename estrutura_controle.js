/*
escreval("digite o nome do aluno: ")
leia(nome)
escreval("digite a nota 01 do aluno: ")
leia(nota01)
escreval("digite a nota 02 do aluno: ")
leia(nota02)
media := (nota01 + nota02) / 2

se media >= 5 entao
   escreval("APROVADO, ", nome, "!")
senao
escreval ("REPROVADO, ", nome, "!")
fimse
*/

var nome, nota01, nota02;
nome = prompt("digite o nome do aluno: ")
nota01 = prompt("digite a nota 01 do aluno: ")
nota02 = prompt("digite a nota 02 do aluno: ")

media = (parseInt(nota01) + parseInt(nota02)) / 2;

if(media >= 50)
    alert("APROVADO, " + nome + "!")
else
    alert("REPROVADO, " + nome + "!")    