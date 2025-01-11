let url = `https://sheets.googleapis.com/v4/spreadsheets/1Xc76fJwuRMAVVwUsyTrybb9MbYqZ3SWrzcmrEBV3-Fw/values/Works?key=AIzaSyBWN4pynC1PzYGwVMHLYh84w0KjAzAWmYY`;

fetch(url).then(
    function (response) {
      return response.json();
    }
).then(
    (json) => {
      let answerElement = document.querySelector('#answer');
      let valueHtml = '';
      json.values.forEach((row) => {
        valueHtml += `<li>${row[0]} : ${row[1]} : ${row[2]}</li>`
      });
      answerElement.innerHTML = `<ul>${valueHtml}</ul>`;
    }
);