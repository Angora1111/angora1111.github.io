// 作品情報
let url = `https://sheets.googleapis.com/v4/spreadsheets/1Xc76fJwuRMAVVwUsyTrybb9MbYqZ3SWrzcmrEBV3-Fw/values/Works?key=AIzaSyBWN4pynC1PzYGwVMHLYh84w0KjAzAWmYY`;

fetch(url).then(
  function (response) {
    return response.json();
  }
).then(
  (json) => {
    let isHeader = true;
    let mainCount = 1;
    json.values.forEach((row) => {
      if(isHeader){
        isHeader = false;
      }
      else {
        let kind = row[0];
        let title = row[1];
        let abstract = row[7];
        let image = row[8];

        if(kind == 'メイン'){
          document.querySelector(`#main${mainCount}-image`).src = image;
          document.querySelector(`#main${mainCount}-title`).innerHTML = title;
          document.querySelector(`#main${mainCount}-abstract`).innerHTML = abstract;
          mainCount++;
        }
      }
    });
  }
);

// プロフィール情報
url = `https://sheets.googleapis.com/v4/spreadsheets/1Xc76fJwuRMAVVwUsyTrybb9MbYqZ3SWrzcmrEBV3-Fw/values/Profile?key=AIzaSyBWN4pynC1PzYGwVMHLYh84w0KjAzAWmYY`;

fetch(url).then(
    function (response) {
      return response.json();
    }
).then(
    (json) => {
      let rowCount = 0;
      json.values.forEach((row) => {
        if(rowCount == 1) {
          let name = row[0];
          let born = row[1];
          let birthday = row[2];
          let university = row[3];
          let hobby = row[4];
          let desire = row[5];

          let element = document.getElementById("profile-myFace").src = "";
        }
        rowCount++;
      });
      //mainWorkElement.innerHTML = `${mainWorkHtml}`;
    }
);

//---------------------------------------------------------

function showOthers(){
  let url = `https://sheets.googleapis.com/v4/spreadsheets/1Xc76fJwuRMAVVwUsyTrybb9MbYqZ3SWrzcmrEBV3-Fw/values/Works?key=AIzaSyBWN4pynC1PzYGwVMHLYh84w0KjAzAWmYY`;

  fetch(url).then(
    function (response) {
        return response.json();
    }
  ).then(
    (json) => {
      let subWorkElement = document.querySelector('#sub-works');
      if(subWorkElement.innerHTML != ""){
        subWorkElement.innerHTML = "";
        document.querySelector('#button-show-others').innerHTML = "View Others";
        return;
      }

      let subWorkHtml = '';
      let isHeader = true;
      let subCount = 0;
      json.values.forEach((row) => {
        if(isHeader){
          isHeader = false;
        }
        else {
          let kind = row[0];
          let title = row[1];
          let abstract = row[7];
          let image = row[8];

          console.log(kind);
          if(kind == 'その他'){
            if(subCount % 4 == 0) {
              subWorkHtml += '<div class="row">';
            }
            subWorkHtml +=
            `
            \t<div class="col-3 border">
            \t\t<img src=${image} alt=サブ画像${subCount+1} width="100%"/>
            \t\t<p class="fw-bold fs-3 mb-0">${title}</p>
            \t\t<p>${abstract}</p>
            \t\t<div class="row m-1">
            \t\t\t<div class="col-8"></div>
            \t\t\t<button class="col-4 btn btn-warning">More</button>
            \t\t</div>
            \t</div>
            `
            if(subCount % 4 == 3) {
              subWorkHtml += '</div>';
            }

            subCount++;
          }
        }
      });
      console.log(subCount);
      for(let i = subCount % 4; i < 4; ++i) {
        subWorkHtml +=
        `
        \t<div class="col-3 border">
        \t</div>
        `
      }
      subWorkElement.innerHTML = `${subWorkHtml}`;
      document.querySelector('#button-show-others').innerHTML = "Close";
    }
  );
}