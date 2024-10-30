function doLoop(){
  let answer = "";

  // 課題１-①
  let num = 0;
  let sum = 0;
  while(num <= 10000){
    sum += num;
    num++;
  }
  answer += `1:${sum}`;

  // 課題１-②
  num = 0;
  sum = 0;
  while(num <= 10000){
    sum += num;
    if(sum > 50000){
      break;
    }
    num++;
  }
  /*
  [別解]
  while(true){
    同じ
  }
  */
  answer += ` 2:${num}`;

  // 課題２
  answer += "<br>3:<br>";
  num = 1;
  while(num <= 100){
    if(num % 15 == 0){
      answer += `FizzBuzz`;
    }
    else if(num % 3 == 0){
      answer += `Fizz`;
    }
    else if(num % 5 == 0){
      answer += `Buzz`;
    }
    else{
      answer += num;
    }
    answer += "<br>";
    num++;
  }

  document.querySelector("#answer").innerHTML = answer;
}