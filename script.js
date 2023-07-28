alert(
  "instructions: " +
    " 1. enter names of player1 ,player2 , player3 and player4, then total no of rounds you want to play  2.this game is available only in offline mode 3.anter all values properly "
);
var player1name = prompt("enter player 1 name ");
var player2name = prompt("enter player 2 name ");
var player3name = prompt("enter player 3 name ");
var player4name = prompt("enter player 4 name ");
player1name = player1name.toUpperCase();
player2name = player2name.toUpperCase();
player3name = player3name.toUpperCase();
player4name = player4name.toUpperCase();
let totalgames = prompt("number of rounds you want to play");
alert("roll the dicee to start the game have fun ");

if (
  totalgames == "" ||
  totalgames >= 25 ||
  totalgames % 1 != 0 ||
  totalgames == NaN
) {
   
  totalgames = 7;
}
else{
    
}
totalgames = totalgames;
let result = "404";
var randomnum1 = 0;
var randomnum2 = 0;
var randomnum3 = 0;
var randomnum4 = 0;
var player1 = 0;
var player2 = 0;
var player3 = 0;
var player4 = 0;
var gamesplayed = 0;
var matchesplayed = 0;
var fakesplayed = 0;
function restart() {
  randomnum1 = 0;
  randomnum2 = 0;
  player1 = 0;
  player2 = 0;
  randomnum3 = 0;
  randomnum4 = 0;
  player3 = 0;
  player4 = 0;
  gamesplayed = 0;
  fakesplayed = 0;
  var audio = new Audio("assets/green.mp3");
  audio.play();
  document.getElementById("gamesplayed").innerHTML =
    fakesplayed + "/" + totalgames;
  document.getElementById("player1score").innerHTML = player1;
  document.getElementById("player2score").innerHTML = player2;
  document.getElementById("player3score").innerHTML = player3;
  document.getElementById("player4score").innerHTML = player4;
  document.getElementById("mybtn1").disabled = false;
  document.getElementById("mybtn2").disabled = false;
  document.getElementById("mybtn3").disabled = false;
  document.getElementById("mybtn4").disabled = false;
  document.getElementById("here2").hidden = false;
  document.getElementById("here1").hidden = false;
  document.getElementById("here3").hidden = false;
  document.getElementById("here4").hidden = false;
  document.getElementById("result").innerHTML = "play again  &#128521;";
  document.getElementById("restart").hidden = true;
  document.getElementById("mybtn").hidden = true;
  gameover();
}
function reload1() {
  displayplayernames();
  randomnum1 = Math.floor(Math.random() * (6 - 0)) + 1;
  document.getElementById("player1name").innerHTML = player1name;
  document.getElementById("player1names").innerHTML = player1name + " score:";
  document.getElementById("demo1").src = "assets/dice" + randomnum1 + ".png";
  document.getElementById("demo2").src = "assets/favicon.png";
document.getElementById("demo3").src = "assets/favicon.png";
document.getElementById("demo4").src = "assets/favicon.png";
  gamesplayed = gamesplayed + 0.25;
  fakesplayed = fakesplayed + 1;
  document.getElementById("gamesplayed").innerHTML =
    fakesplayed + "/" + totalgames;
  player1 = player1 + randomnum1;
  document.getElementById("player1score").innerHTML = player1;
  document.getElementById("mybtn1").disabled = true;
  document.getElementById("mybtn2").disabled = false;
  document.getElementById("mybtn3").disabled = true;
  document.getElementById("mybtn4").disabled = true;
  document.getElementById("here1").hidden = true;
  document.getElementById("here2").hidden = false;
  document.getElementById("here3").hidden = true;
  document.getElementById("here4").hidden = true;
  var audio = new Audio("assets/blue.mp3");
  audio.play();
  gameover();
}
function reload2() {
  displayplayernames();
  randomnum2 = Math.floor(Math.random() * (6 - 0)) + 1;
  document.getElementById("demo1").src = "assets/favicon.png";
  document.getElementById("demo2").src = "assets/dice" + randomnum2 + ".png";
  document.getElementById("demo3").src = "assets/favicon.png";
  document.getElementById("demo4").src = "assets/favicon.png";
  document.getElementById("player2names").innerHTML = player2name + " score:";
  document.getElementById("player2name").innerHTML = player2name;
  player2 = player2 + randomnum2;
  gamesplayed = gamesplayed + 0.25;
  document.getElementById("gamesplayed").innerHTML =
  fakesplayed + "/" + totalgames;

  document.getElementById("player2score").innerHTML = player2;
  document.getElementById("mybtn1").disabled = true;
  document.getElementById("mybtn2").disabled = true;
  document.getElementById("mybtn3").disabled = false;
  document.getElementById("mybtn4").disabled = true;
  document.getElementById("here1").hidden = true;
  document.getElementById("here2").hidden = true;
  document.getElementById("here3").hidden = false;
  document.getElementById("here4").hidden = true;
  var audio = new Audio("assets/blue.mp3");
  audio.play();
  gameover();
}
function reload3() {
  displayplayernames();
  randomnum3 = Math.floor(Math.random() * (6 - 0)) + 1;
  document.getElementById("player3name").innerHTML = player3name;
  document.getElementById("player3names").innerHTML = player3name + " score:";
  document.getElementById("demo1").src = "assets/favicon.png";
  document.getElementById("demo2").src = "assets/favicon.png";
  document.getElementById("demo3").src = "assets/dice" + randomnum3 + ".png";
  document.getElementById("demo4").src = "assets/favicon.png";
  gamesplayed = gamesplayed + 0.25;
  
  document.getElementById("gamesplayed").innerHTML =
    fakesplayed + "/" + totalgames;
  player3 = player3 + randomnum3;
  document.getElementById("player3score").innerHTML = player3;
  document.getElementById("mybtn1").disabled = true;
  document.getElementById("mybtn2").disabled = true;
  document.getElementById("mybtn3").disabled = true;
  document.getElementById("mybtn4").disabled = false;
  document.getElementById("here1").hidden = true;
  document.getElementById("here2").hidden = true;
  document.getElementById("here3").hidden = true;
  document.getElementById("here4").hidden = false;
  var audio = new Audio("assets/blue.mp3");
  audio.play();
  gameover();
}
function reload4() {
  displayplayernames();
  randomnum4 = Math.floor(Math.random() * (6 - 0)) + 1;
  document.getElementById("player4name").innerHTML = player4name;
  document.getElementById("player4names").innerHTML = player4name + " score:";
  document.getElementById("demo1").src = "assets/favicon.png";
document.getElementById("demo2").src = "assets/favicon.png";
document.getElementById("demo3").src = "assets/favicon.png";
  document.getElementById("demo4").src = "assets/dice" + randomnum4 + ".png";
  gamesplayed = gamesplayed + 0.25;
  document.getElementById("gamesplayed").innerHTML =
    fakesplayed + "/" + totalgames;
  player4 = player4 + randomnum4;
  document.getElementById("player4score").innerHTML = player4;
  document.getElementById("mybtn1").disabled = false;
  document.getElementById("mybtn2").disabled = true;
  document.getElementById("mybtn3").disabled = true;
  document.getElementById("mybtn4").disabled = true;
  document.getElementById("here1").hidden = false;
  document.getElementById("here2").hidden = true;
  document.getElementById("here3").hidden = true;
  document.getElementById("here4").hidden = true;
  var audio = new Audio("assets/blue.mp3");
  audio.play();
  gameover();
}
function gameover() {
  if (gamesplayed == totalgames) {
    var audio = new Audio("assets/wrong.mp3");
    if (player1 > player2 && player1 > player3 &&player1 > player4) {
      result = player1name + " won the game ";

      setTimeout(() => {
        audio.play();
      }, 500);
    } else if (player2 > player1 && player2 > player3 &&player2 > player4) {
      result = player2name + " won the game";

      setTimeout(() => {
        audio.play();
        audio.play();
        audio.play();
      }, 500);
    } else if (player3 > player1 && player3 > player2 &&player3 > player4) {
        result = player3name + " won the game";
  
        setTimeout(() => {
          audio.play();
          audio.play();
          audio.play();
        }, 500);
      } else if(player1== player2 || player1== player3 || player2== player3 || player3== player4 || player1==player4 ||player2 ==player4){
        result = "match tie between others";

      setTimeout(() => {
        audio.play();
        audio.play();
      }, 500);

      }else {
      result = player4name + " won the game ";

      setTimeout(() => {
        audio.play();
        audio.play();
      }, 500);
    }

    document.getElementById("result").innerHTML = result;
    document.getElementById("mybtn1").disabled = true;
    document.getElementById("mybtn2").disabled = true;
    document.getElementById("mybtn3").disabled = true;
    document.getElementById("mybtn4").disabled = true;
    document.getElementById("here2").hidden = true;
    document.getElementById("here1").hidden = true;
    document.getElementById("here3").hidden = true;
    document.getElementById("here4").hidden = true;
    document.getElementById("restart").hidden = false;
    document.getElementById("mybtn").hidden = false;
    document.getElementById("demo1").src = "assets/favicon.png";
    document.getElementById("demo2").src = "assets/favicon.png";
    document.getElementById("demo3").src = "assets/favicon.png";
    document.getElementById("demo4").src = "assets/favicon.png";

    document.getElementById("mybtn").innerHTML =
      " game over ! <br>" + "refresh page to start new game";
  }
}
function displayplayernames() {
  document.getElementById("player1nameagain").innerHTML = player1name;
  document.getElementById("player2nameagain").innerHTML = player2name;
  document.getElementById("player3nameagain").innerHTML = player3name;
  document.getElementById("player4nameagain").innerHTML = player4name;
}
