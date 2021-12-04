var num=Math.floor(Math.random()*6)+1;
var diceimagesrc="dice"+num+".png";
var im1=document.querySelectorAll("img")[0].setAttribute("src",diceimagesrc);

var num1=Math.floor(Math.random()*6)+1;
var diceimagesrc1="dice"+num1+".png";
var im2=document.querySelectorAll("img")[1].setAttribute("src",diceimagesrc1);

if(num>num1){
  document.querySelector("h1").innerHTML="🎈Player 1 Wins";
}
else if(num<num1){
  document.querySelector("h1").innerHTML="🎈Player 2 Wins";
}
else{
  document.querySelector("h1").innerHTML="Its a Draw";
}
