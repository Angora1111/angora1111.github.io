let answer = document.querySelector("#answer");

// while
/*
let content = "";
let index = 0;
while(index < tweets.length){
  let tweet = tweets[index];
  content += `\t<li><b>${tweet.name}</b>:${tweet.message} <i>${tweet.tweetedAt}</i></li>`;
  index++;
}
answer.innerHTML = `<ul>${content}</ul>`;
*/

// for
/*
let content = "";
for(let index = 0; index < tweets.length; index++) {
  let tweet = tweets[index];
  content += `\t<li><b>${tweet.name}</b>:${tweet.message} <i>${tweet.tweetedAt}</i></li>`;
}
answer.innerHTML = `<ul>${content}</ul>`;
*/

// forEach
let content = "";
tweets.forEach(function(tweet){
  content += `\t<li><b>${tweet.name}</b>:${tweet.message} <i>${tweet.tweetedAt}</i></li>`;
})
answer.innerHTML = `<ul>${content}</ul>`;