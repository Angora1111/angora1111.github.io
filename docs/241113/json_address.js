function update() {
  // 郵便番号を受け取る
  let searchAddress = document.querySelector("#search").value;
  console.log(searchAddress);

  fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${searchAddress}`).then(
      function (response) {
        // Promiseを返すことで、thenで続けることが出来るようになる
        return response.text();
      }
  ).then(
      function (text) {
        let json = JSON.parse(text);
        let answerHtml = "";
        console.log(json.status);
        if(json.results == null) {
          document.querySelector("#answer").innerHTML = "該当なし";
        }
        else {
          json.results.forEach((elem) => {
            answerHtml += `${elem.address1} ${elem.address2} ${elem.address3}`;
          });
          document.querySelector("#answer").innerHTML = answerHtml;
          let inner = document.querySelector("#inner_data");
          inner.style.display = "none";
          inner.innerHTML = text;
        }
      }
  )
}