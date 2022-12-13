var randomNumber1=Math.floor(Math.random()*6)+1;
var randomDiceImage="images/"+"dice" + randomNumber1 + ".jpg";//images/(dice1.png-dice6.png)
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImage);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDiceImage1="images/"+"dice"+ randomNumber2 +".jpg";
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage1)

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player 1 wins!";
}
else if (randomNumber2> randomNumber1){
  document.querySelector("h1").innerHTML="Player 2 wins!";
}
else{
  document.querySelector("h1").innerHTML="Draw!";
}
