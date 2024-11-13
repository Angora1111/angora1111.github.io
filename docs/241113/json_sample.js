fetch("https://morimorihoge.github.io/teu2024f/tweets.json").then(
    function(response){
      // Promiseを返すことで、thenで続けることが出来るようになる
      console.log(response);
      return response.text();
    }
).then(
    function(text){
      let json = JSON.parse(text);
      let answerHtml = "";
      json.forEach(function(tweet){
        answerHtml += `<li>${tweet.name}</li>`;
      });
      document.querySelector("#answer").innerHTML = answerHtml;
      let inner = document.querySelector("#inner_data");
      inner.style.display = "none";
      inner.innerHTML = text;
    }
)