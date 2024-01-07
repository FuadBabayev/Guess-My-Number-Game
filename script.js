let message = document.querySelector('.message');

let input = document.querySelector('input');

let check = document.querySelector('.check');

let number = document.querySelector('.number');

let score = document.querySelector('.score');

let body = document.querySelector('body');

let again = document.querySelector('.again');

let highscore = document.querySelector('.highscore');

let random = Math.floor(Math.random() * 20) + 1;

let point = 20;

let high = 0;

score.innerHTML = point;

highscore.innerHTML = high;



check.addEventListener('click', () => {

  let guess = Number(input.value);
  point--;
  score.innerHTML = point;

  if (point > 0) {

    if (!guess) {

      message.textContent = '⛔ Not A Number!';

    } else if (guess < 0) {

      message.textContent = '⚠️ Not A Negative!';

    } else if (guess < random) {

      message.textContent = '⏫ Increase!';

    } else if (guess > random) {

      message.textContent = '⏬ Decrease!';

    } else {

      message.textContent = '🎉 Correct Number!';

      body.style.backgroundColor = '#60b347';

      number.innerHTML = random;

      number.style.width = '30rem';

      if(point > high){

        high = point

        highscore.textContent = point;

      }
    }
  }
  else {

    message.textContent = '💣 You Lost!';

    body.style.backgroundColor = 'red';

    score.innerHTML = 0;
    
  }
});





























































































































































again.addEventListener('click', function(){

  point = 20;

  random = Math.floor(Math.random() * 20) + 1;

  message.textContent = 'Start guessing...';

  score.innerHTML = point;

  number.innerHTML = '?';

  input.value = '';

  number.style.width = '15rem';

  body.style.backgroundColor = '#222';

});