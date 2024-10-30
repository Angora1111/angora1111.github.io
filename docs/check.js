function checkNumber(){
  if(Number(document.querySelector("#num").value) > 10){
    window.alert("true");
  }else{
    window.alert("false");
  }
}

// 課題１
function checkAge(){
  let age = Number(document.querySelector("#age").value);
  let showMessage;
  if(age <= 0)
  {
    showMessage = "エラー"
  }
  else if(age < 20){
    showMessage = "未成年";
  }
  else if(age < 65)
  {
    showMessage = "成人"
  }
  else
  {
    showMessage = "高齢者"
  }
  document.querySelector("#answer").innerHTML = showMessage;
}

// 宿題１
function checkYear(){
  let year = Number(document.querySelector("#year").value);
  let result = "";
  if(year % 400 == 0){
    result = "閏年";
  }
  else if(year % 100 == 0){
    result = "平年";
  }
  else if(year % 4 == 0){
    result = "閏年";
  }
  else{
    result = "平年"
  }
  document.querySelector("#answer").innerHTML = result;
}
