function showModal(){
  // idがmodalの要素を取得して、書き換える
  document.querySelector("div#modal").innerHTML = "書き換えてやったぞ！";
}

function changeRed(){
  document.querySelector("div#modal2").style.backgroundColor = "red";
}
function changeYellow(){
  document.querySelector("div#modal2").style.backgroundColor = "yellow";
}
function changeGreen(){
  document.querySelector("div#modal2").style.backgroundColor = "green";
}

function appendCircle(){
  document.querySelector("div#modal3").innerHTML += "o";
  // これでもいける
  //document.querySelector("div#modal3").append("o");
}
function appendCross(){
  document.querySelector("div#modal3").innerHTML += "x";
  // これでもいける
  //document.querySelector("div#modal3").append("x");
}

function plusOne(){
  let number_str = document.querySelector("div#modal4").innerHTML;
  let number_number = Number(number_str);
  number_number += 1;
  document.querySelector("div#modal4").innerHTML = String(number_number);
}
function plusFive(){
  let number_str = document.querySelector("div#modal4").innerHTML;
  let number_number = Number(number_str);
  number_number += 5;
  document.querySelector("div#modal4").innerHTML = String(number_number);
}
function plusTen(){
  let number_str = document.querySelector("div#modal4").innerHTML;
  let number_number = Number(number_str);
  number_number += 10;
  document.querySelector("div#modal4").innerHTML = String(number_number);
}