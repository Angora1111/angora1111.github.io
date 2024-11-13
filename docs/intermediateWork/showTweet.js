// 読み込み時に実行
showTweet("");

// === 以下、イベント関数 ===
function showTweet(filter){
  // フィルターを適用
  let content = ``;
  tweets.forEach((tweet) => {
    // フィルターなし or フィルターに該当　なら表示
    if(filter == `` || tweet.name == filter) {
      content += `    <div class="row border p-3">\n`
      content += `      <img src="${tweet.avatar}" class="col-2 border">\n`
      content += `      <div class="col-9">\n`
      content += `        <p><span class="fw-bold">${tweet.name}</span> `
      content += `        ${tweet.message} `
      content += `        <span class="fst-italic">${tweet.tweetedAt}</span></p>\n`
      content += `      </div>\n`
      content += `    </div>\n`
    }
  });
  document.querySelector("#tweet-list").innerHTML = content;

  /*
  【お手本】
      <div class="row">
        <img src="https://morimorihoge.github.io/teu2019f/images/omocha_robot.png" class="col-2">
        <div class="col-10">
          <p>三郎BOT</p>
          <p>21時でござる</p>
          <p>2018-11-01 21:00:00</p>
        </div>
      </div>
  */
}