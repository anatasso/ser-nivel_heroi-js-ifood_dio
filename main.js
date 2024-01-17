const prompt = require('prompt-sync')()
let nickname = prompt('Nickname: ')
let xp = parseInt(prompt('XP: '))

function encontrarNivelHeroi(nickname, experience) {
  let nivelHeroi;
  if (experience > 0) {
    if (experience <= 1000) {
      nivelHeroi = 'Ferro';
    } else if (experience <= 2000) {
      nivelHeroi = 'Bronze';
    } else if (experience <= 5000) {
      nivelHeroi = 'Prata';
    } else if (experience <= 7000) {
      nivelHeroi = 'Ouro';
    } else if (experience <= 8000) {
      nivelHeroi = 'Platina';
    } else if (experience <= 9000) {
      nivelHeroi = 'Ascendente';
    } else if (experience <= 10000) {
      nivelHeroi = 'Imortal';
    } else if (experience > 10000) {
      nivelHeroi = 'Radiante';
    }
    console.log(
      `O Herói de nome ${nickname} está no nível de ${nivelHeroi}`
    );
  } else {
    console.log('XP inválido');
  }
}

encontrarNivelHeroi(nickname, xp);