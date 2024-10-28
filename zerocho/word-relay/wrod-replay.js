// const number = parseInt(prompt('참가인원?'));
const number = 3;
const users = document.querySelector('#order');
const input = document.querySelector('input');
const button = document.querySelector('button');
const wordView = document.querySelector('#word');
let word;
let newWord;
let turn = 1;

const turnIncrease = () => {
  if (turn === number) {
    turn = 1;
  } else {
    turn++;
  }
  users.innerHTML = turn;
}

const game = () => {
  let newWord = input.value;
  if (!word || word[word.length - 1] === newWord[0]) {
    word = newWord;
    turnIncrease();
  } else {
    alert("다시 입력하세요.");
  }
  wordView.innerHTML = newWord;
  input.value = ''
  input.focus();

}

button.addEventListener('click', game);
