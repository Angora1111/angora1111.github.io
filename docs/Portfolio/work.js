function updateInfo(gameTitle) {
  let url = `https://sheets.googleapis.com/v4/spreadsheets/1Xc76fJwuRMAVVwUsyTrybb9MbYqZ3SWrzcmrEBV3-Fw/values/Works?key=AIzaSyBWN4pynC1PzYGwVMHLYh84w0KjAzAWmYY`;

  fetch(url).then(
    function (response) {
      return response.json();
    }
  ).then(
    (json) => {
      json.values.forEach((row) => {
        let kind = row[0];
        let title = row[1];
        if(title == gameTitle)
        {
          let env = row[2];
          let workTime = row[3];
          let workerNum = row[4];
          let myPart = row[5];
          let link = row[6];
          links = link.split("|")
          let abstract = row[7];
          let imageMain = row[8];

          let point1_title = row[9];
          let point1_message = row[10];
          let point1_image1 = row[11];
          let point1_image2 = row[12];
          let point1_image3 = row[13];
          let point1_image4 = row[14];

          let point2_title = row[15];
          let point2_message = row[16];
          let point2_image1 = row[17];
          let point2_image2 = row[18];
          let point2_image3 = row[19];
          let point2_image4 = row[20];

          document.getElementById("title").innerHTML = title;
          let extension = imageMain.toString().split('.');
          extension = extension[extension.length - 1];
          console.log(extension);
          if(extension == 'mp4')
          {
            document.querySelector("#game-image").innerHTML = `<video src="${imageMain}" autoplay muted loop controls width="100%">`;
          }
          else
          {
            document.querySelector("#game-image").innerHTML = `<img src="${imageMain}" alt="ゲーム画面" width="100%">`;
          }
          document.getElementById("env").innerHTML = `開発環境やライブラリ：${env}`;
          document.getElementById("time").innerHTML = `制作時間：${workTime}`;
          document.getElementById("member-num").innerHTML = `制作人数：${workerNum}`;
          document.getElementById("my-part").innerHTML = `担当：${myPart}`;
          document.getElementById("link").innerHTML = link;
          if(links.length == 2)
          {
            document.getElementById("link").innerHTML = `<br>プレイ動画：<a href="${links[0]}">${links[0]}</a><br><br>`;
            document.getElementById("link").innerHTML += `ゲームはこちら：<a href="${links[1]}">${links[1]}</a>`;
          }
          else
          {
            if(links[0] == "なし") {
              document.getElementById("link").innerHTML = "関連リンク：なし";
            }
            else
            {
              document.getElementById("link").innerHTML = `関連リンク：<a href="${links[0]}">${links[0]}</a>`;
            }
          }
          document.getElementById("abstract").innerHTML = abstract;

          document.getElementById("point1-header").innerHTML = point1_title;
          document.getElementById("point1-content").innerHTML = point1_message;
          let existCount_point1 = 0;
          if(point1_image1 != "" && point1_image1 != undefined) existCount_point1++;
          if(point1_image2 != "" && point1_image2 != undefined) existCount_point1++;
          if(point1_image3 != "" && point1_image3 != undefined) existCount_point1++;
          if(point1_image4 != "" && point1_image4 != undefined) existCount_point1++;
          console.log(existCount_point1);
          let element = document.getElementById("point1-images");
          switch (existCount_point1)
          {
            case 1:
              element.innerHTML =
                `
                <div class="row">
                  <img class="col-12" src="${point1_image1}" alt="アピール画像1-1" width="100%">
                </div>
                `
              break;

            case 2:
              element.innerHTML =
                `
                <div class="row">
                  <img class="col-6" src="${point1_image1}" alt="アピール画像1-1" width="100%">
                  <img class="col-6" src="${point1_image2}" alt="アピール画像1-2" width="100%">
                </div>
                `
              break;

            case 3:
              element.innerHTML =
                `
                <div class="row">
                  <img class="col-12" src="${point1_image1}" alt="アピール画像1-1" width="100%">
                </div>
                <div class="row">
                  <img class="col-6" src="${point1_image2}" alt="アピール画像1-2" width="100%">
                  <img class="col-6" src="${point1_image3}" alt="アピール画像1-3" width="100%">
                </div>
                `
                break;

            case 4:
              element.innerHTML =
                `
                <div class="row">
                  <img class="col-6" src="${point1_image1}" alt="アピール画像1-1" width="100%">
                  <img class="col-6" src="${point1_image2}" alt="アピール画像1-2" width="100%">
                </div>
                <div class="row">
                  <img class="col-6" src="${point1_image3}" alt="アピール画像1-3" width="100%">
                  <img class="col-6" src="${point1_image4}" alt="アピール画像1-4" width="100%">
                </div>
                `
              break;
          }

          if(kind == "メイン") {
            document.getElementById("point2-header").innerHTML = point2_title;
            document.getElementById("point2-content").innerHTML = point2_message;
            let existCount_point2 = 0;
            if (point2_image1 != "" && point2_image1 != undefined) existCount_point2++;
            if (point2_image2 != "" && point2_image2 != undefined) existCount_point2++;
            if (point2_image3 != "" && point2_image3 != undefined) existCount_point2++;
            if (point2_image4 != "" && point2_image4 != undefined) existCount_point2++;
            console.log(existCount_point2);
            element = document.getElementById("point2-images");
            switch (existCount_point2) {
              case 1:
                element.innerHTML =
                    `
              <div class="row">
                <img class="col-12" src="${point2_image1}" alt="アピール画像1-1" width="100%">
              </div>
              `
                break;

              case 2:
                element.innerHTML =
                    `
              <div class="row">
                <img class="col-6" src="${point2_image1}" alt="アピール画像1-1" width="100%">
                <img class="col-6" src="${point2_image2}" alt="アピール画像1-2" width="100%">
              </div>
              `
                break;

              case 3:
                element.innerHTML =
                    `
              <div class="row">
                <img class="col-12" src="${point2_image1}" alt="アピール画像1-1" width="100%">
              </div>
              <div class="row">
                <img class="col-6" src="${point2_image2}" alt="アピール画像1-2" width="100%">
                <img class="col-6" src="${point2_image3}" alt="アピール画像1-3" width="100%">
              </div>
              `
                break;

              case 4:
                element.innerHTML =
                    `
              <div class="row">
                <img class="col-6" src="${point2_image1}" alt="アピール画像1-1" width="100%">
                <img class="col-6" src="${point2_image2}" alt="アピール画像1-2" width="100%">
              </div>
              <div class="row">
                <img class="col-6" src="${point2_image3}" alt="アピール画像1-3" width="100%">
                <img class="col-6" src="${point2_image4}" alt="アピール画像1-4" width="100%">
              </div>
              `
                break;
            }
          }
        }
      });
    }
  );
}