const againBtn = document.querySelector(".again");
const number = document.querySelector(".number");
const myInput = document.querySelector(".guess");
const checkBtn = document.querySelector(".check");
const message = document.querySelector(".msg");
const myScore = document.querySelector(".my-score");
const topScore = document.querySelector(".top-score");
const bodyScreen = document.querySelector("body");

let tryCount = 10;
let score = 0;

checkBtn.addEventListener("click", playToGame);
againBtn.addEventListener("click", againGame);

let randomNum = Math.floor(Math.random() * 20);
console.log(randomNum);

function playToGame() {
  const myNumber = myInput.value;
  if (myNumber == "") {
    message.textContent = "Lütfen boş bırakmayınız!";
  } else if (myNumber != randomNum) {
    if (myNumber < randomNum) {
      message.textContent = "Arttırın";
      tryCount--;
    } else if (myNumber > randomNum) {
      message.textContent = "Azaltın";
      tryCount--;
    }

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
    // score = tryCount;
    // topScore.textContent = score;
    topScoreScreen();
  }
}
let scoreList = [];
function topScoreScreen() {
  scoreList.push(tryCount);
  console.log(scoreList);
  topScore.textContent = Math.max(...scoreList);
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
  message.textContent = "Yeni oyun başlıyor...";
}
