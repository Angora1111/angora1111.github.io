function doCheckAnswers(){
  let input = document.querySelector("#input_string").value;
  let answers = Array.from(document.querySelectorAll('.answer-list li'));

  console.log(input);
  let result = "不正解";
  answers.forEach(ans => {
    if (input == ans.innerHTML) {
      result = "正解";
    }
  });

  document.querySelector("#answer").innerHTML = result;
}