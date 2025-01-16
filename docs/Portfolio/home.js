async function wait(second){
  return new Promise(resolve => setTimeout(resolve, 1000 * second));
}
async function restartCircles(){
  anime({
    targets: "#circle1",
    scale: 0.6,
    direction: "alternate",
    loop: true,
  })
  await wait(0.12);
  anime({
    targets: "#circle2",
    scale: 0.6,
    direction: "alternate",
    loop: true,
  })
  await wait(0.12);
  anime({
    targets: "#circle3",
    scale: 0.6,
    direction: "alternate",
    loop: true,
  })
}

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
          let extension = image.toString().split('.');
          extension = extension[extension.length - 1];
          console.log(extension);
          if(extension == 'mp4')
          {
            document.querySelector(`#main${mainCount}-image`).innerHTML = `<video src="${image}" autoplay muted loop controls width="100%">`;
          }
          else
          {
            document.querySelector(`#main${mainCount}-image`).innerHTML = `<img src="${image}" alt="メイン画像${mainCount}" width="100%">`;
          }
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
        let myFace = row[6];

        document.getElementById("profile-myFace").src = myFace;
        document.getElementById("profile-name").innerHTML = name;
        document.getElementById("profile-born").innerHTML = `${born} ${birthday} 生まれ`;
        document.getElementById("profile-university").innerHTML = university;
        document.getElementById("profile-hobby").innerHTML = `趣味：${hobby}`;
        document.getElementById("profile-desire").innerHTML = desire;
      }
      else if(rowCount == 3) {
        let element = document.getElementById("language");
        let text = '';
        let progressName = ["Beginner", "Intermediate", "Advanced"];
        let colWidth = [2, 4, 7];
        for(let i = 0; i < row.length; i += 2){
          text +=
            `
            <div class="row mb-2">
              <div class="col-1"></div>
              <div class="col-3 profileSkillName">${row[i]}</div>
              <div class="col-${colWidth[row[i+1]-1]} bg-primary text-white align-middle profileSkillGuage">${progressName[row[i+1]-1]}</div>
            </div>
            `
        }
        element.innerHTML = text;
      }
      else if(rowCount == 4) {
        let element = document.getElementById("tool");
        let text = '';
        let progressName = ["Beginner", "Intermediate", "Advanced"];
        let colWidth = [2, 4, 7];
        for(let i = 0; i < row.length; i += 2){
          text +=
            `
            <div class="row mb-2">
              <div class="col-1"></div>
              <div class="col-3 profileSkillName">${row[i]}</div>
              <div class="col-${colWidth[row[i+1]-1]} bg-primary text-white profileSkillGuage">${progressName[row[i+1]-1]}</div>
            </div>
            `
        }
        element.innerHTML = text;
      }
      rowCount++;
    });
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
        document.querySelector('#circles').innerHTML =
          `
          <div id="circle1" class="circle bg-dark"></div>
          <div id="circle2" class="circle bg-dark"></div>
          <div id="circle3" class="circle bg-dark"></div>
          `;
        restartCircles();
        subWorkElement.className = "";

        return;
      }
      document.querySelector('#circles').innerHTML = "";

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
            // --- 動画or画像 ---
            let extension = image.toString().split('.');
            extension = extension[extension.length - 1];
            console.log(extension);
            let imgLine = '';
            if(extension == 'mp4')
            {
              imgLine = `<video src="${image}" autoplay muted loop controls width="100%">`;
            }
            else
            {
              imgLine = `<img src="${image}" alt="サブ画像${subCount+1}" width="100%">`;
            }
            // ----------------
            subWorkHtml +=
            `
            \t<div class="col-3 gameBlock">
            \t\t${imgLine}
            \t\t<p class="otherGameTitle">${title}</p>
            \t\t<p class="gameAbstract">${abstract}</p>
            \t\t<div class="moreButton">
            \t\t\t<button onclick="location.href='work-${title}.html'" class="btn btn-warning">More</button>
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
      subWorkElement.className = "m-4";
      document.querySelector('#button-show-others').innerHTML = "Close";
    }
  );
}