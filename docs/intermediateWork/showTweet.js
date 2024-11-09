// 読み込み時に実行
showTweet("");

// === 以下、イベント関数 ===
function showTweet(filter){
  // フィルターを適用
  let content = ``;
  tweets.forEach((tweet) => {
    // フィルターなし or フィルターに該当　なら表示
    if(filter == `` || tweet.name == filter) {
      content += `    <div class="row">\n`
      content += `      <img src="${tweet.avatar}" class="col-2">\n`
      content += `      <div class="col-10">\n`
      content += `        <p class="fw-bold">${tweet.name}</p>\n`
      content += `        <p>${tweet.message}</p>\n`
      content += `        <p class="fst-italic">${tweet.tweetedAt}</p>\n`
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