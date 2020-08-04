var dice1= Math.random();
    dice1= Math.floor(Math.random()*6+1);

var diceImage1= "images/dice" + dice1 + ".png";
document.querySelector("div .img1").setAttribute("src",diceImage1);

var dice2= Math.random();
    dice2= Math.floor(Math.random()*6+1);
var diceImage2= "images/dice" + dice2 + ".png";
document.querySelector("div .img2").setAttribute("src",diceImage2);

if(dice1>dice2){
  document.getElementsByTagName("h1")[0].textContent="🙌 Player 1 Wins!";
}else if (dice1<dice2){
  document.getElementsByTagName("h1")[0].textContent="Player 2 Wins! 🙌";
}else{
  document.getElementsByTagName("h1")[0].textContent="Draw! Refresh again";
}
