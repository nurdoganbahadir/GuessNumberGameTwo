const againBtn = document.querySelector(".again");
const number = document.querySelector(".number");
const myInput = document.querySelector(".guess");
const checkBtn = document.querySelector(".check");
const message = document.querySelector(".msg");
const myScore = document.querySelector(".my-score");
const topScore = document.querySelector(".top-score");
const bodyScreen = document.querySelector("body");

let score = 0;
let tryCount = 10;

const randomNum = Math.floor(Math.random() * 20);
console.log(randomNum);

checkBtn.addEventListener("click", playToGame);

function playToGame() {
  const myNumber = myInput.value;
  if (myNumber == "") {
    message.textContent = "Lütfen boş bırakmayınız!";
  } else if (myNumber != randomNum) {
    message.textContent = "Bilemediniz";
    tryCount--;
    myScore.textContent = tryCount;
  } else {
    message.textContent = "Tebrikler tahmininiz doğru!";
    bodyScreen.style.backgroundColor = "green";
    checkBtn.disabled = true;
  }
}
