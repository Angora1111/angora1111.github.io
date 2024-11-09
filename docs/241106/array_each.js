let answer = document.querySelector("#answer");

// while
answer.innerHTML = "<ul>\n";
let index = 0;
while(index < fruitNames.length){
  answer.innerHTML += `\t<li>${fruitNames[index]}</li>`;
  index++;
}
answer.innerHTML += "</ul>\n";

// for
answer.innerHTML = "<ul>\n";
for(let i = 0; i < fruitNames.length; i++){
  answer.innerHTML += `\t<li>${fruitNames[i]}</li>`;
}
answer.innerHTML += "</ul>\n";
