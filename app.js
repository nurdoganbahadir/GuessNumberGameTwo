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

checkBtn.addEventListener("click", playToGame);
againBtn.addEventListener("click", againGame);

let randomNum = Math.floor(Math.random() * 20);
console.log(randomNum);

function playToGame() {
  const myNumber = myInput.value;
  if (myNumber == "") {
    message.textContent = "Lütfen boş bırakmayınız!";
  } else if (myNumber != randomNum) {
    message.textContent = "Bilemediniz";
    tryCount--;
    myScore.textContent = tryCount;
    if (tryCount == 0) {
      message.textContent =
        "Tahmin hakkınız doldu. Yeniden oynamak için Again butonuna basınız.";
      bodyScreen.style.backgroundColor = "red";
      checkBtn.disabled = true;
    }
  } else {
    message.textContent = "Tebrikler tahmininiz doğru!";
    bodyScreen.style.backgroundColor = "green";
    checkBtn.disabled = true;
    number.textContent = randomNum;
  }
}

function againGame() {
  randomNum = Math.floor(Math.random() * 20);
  console.log(randomNum);
  bodyScreen.style.backgroundColor = "#407A8A";
  tryCount = 10;
  myScore.textContent = tryCount;
  myInput.value = "";
  checkBtn.disabled = false;
  playToGame();
}
