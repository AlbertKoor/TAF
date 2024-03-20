// Não altere o nome das variavéis ou o texto do prompt! 
// Modifique apenas o tipo da variavel!            
const gender = prompt('Genero');
const height = prompt('Altura');
const barReps = prompt('Repetições com barra');
const barSeconds = prompt('Tempo das repetições com barra em segundos');
const abs = prompt('Abdominais');
const runDistance = prompt('Distância da corrida em metros');
const runTime = prompt('Tempo da corrida em segundos');
const swimDistance = prompt('Distância da natação em metros');
const swimTime = prompt('Tempo da natação em segundos');
const diveTime = prompt(' Tempo de mergulho em segundos');

let result = false;

//Desenvolva seu código aqui:
if(gender == "male"){
    if(height >= 1.70 && (barReps >= 6 || barSeconds >= 15) && abs >=41 && (runDistance >= 3000 && runTime >= 720 || runDistance >= 5000 && runTime >=1200) && (swimDistance >= 100 && swimTime >= 60 || diveTime >= 30)){
        result = true
        alert("O candidato passou no teste? " + result)
    }
}
else if(gender == "female"){
    if(height >= 1.60 && (barReps >= 5 || barSeconds >= 12) && abs >=41 && (runDistance >= 4000 && runTime >= 900 || runDistance >= 6000 && runTime >=10) && (swimDistance >= 100 && swimTime >= 60 || diveTime >= 30)){
        result = true
        alert("A candidata passou no teste? " + result)
    }   
} 

