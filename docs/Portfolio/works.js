let url = `https://sheets.googleapis.com/v4/spreadsheets/1Xc76fJwuRMAVVwUsyTrybb9MbYqZ3SWrzcmrEBV3-Fw/values/Works?key=AIzaSyBWN4pynC1PzYGwVMHLYh84w0KjAzAWmYY`;

fetch(url).then(
    function (response) {
      return response.json();
    }
).then(
    (json) => {
      let mainWorkElement = document.querySelector('#main-works');
      let mainWorkHtml = '';
      let isHeader = true;
      json.values.forEach((row) => {
        if(isHeader){
          isHeader = false;
        }
        else {
          let kind = row[0];
          let title = row[1];
          let env = row[2];
          let workTime = row[3];
          let workerNum = row[4];
          let myPart = row[5];
          let prize = row[6];
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

          switch (kind) {
            case 'メイン':
              mainWorkHtml +=
                `  
                \t<div>
                \t\t<h2>${title}</h2>
                \t\t<img src="${imageMain}" alt="ゲーム画面1" width="100%">
                \t\t<p>開発環境やライブラリ：${env}</p>
                \t\t<p>制作時間：${workTime}</p>
                \t\t<p>制作人数：${workerNum}</p>
                \t\t<p>担当：${myPart}</p>
                \t\t<p>賞：${prize}</p>
                \t\t<p>概要</p>
                \t\t<p>${abstract}</p>
            
                \t\t<h3>${point1_title}</h3>
                \t\t<img src="${point1_image1}" alt="アピール1_1" width="70%">
                \t\t<p>${point1_message}</p>
                \t</div>
                `
              break;
          }
        }
      });
      mainWorkElement.innerHTML = `${mainWorkHtml}`;
    }
);