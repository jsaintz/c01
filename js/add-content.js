//verifica a hora de hoje
var today = new Date();

//retornar o horário atual
var hourNow = today.getHours();

//saudação
var greeting;

//Adiciona uma saudação
//com base no horário do dia a dia
if (hourNow > 18) {
    greeting = 'Good evening!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good morning!';
} else {
    greeting = 'Welcome!';
}
//retorna a saudação 
document.write('<h3>' + greeting + '</h3>');