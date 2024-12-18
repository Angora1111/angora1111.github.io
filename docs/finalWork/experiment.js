// 音を鳴らしてみる
// https://developer.mozilla.org/ja/docs/Games/Techniques/Audio_for_Web_Games

// エフェクトをかけたいが...
// 参考①　https://developer.mozilla.org/ja/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics
// 参考②　https://qiita.com/sakai_shinichiro/items/b15979354eef767da131
// 参考③　https://developer.mozilla.org/ja/docs/Web/API/AudioContext
// 参考④　https://ics.media/entry/200427/
// →どうやら、AudioContextを使ってノードをつなぐようにして実装すれば行けるみたい
//    [音源(track)] => [エフェクト] => [出力(destination)]
// IIRフィルターをかけられそうなので、エコーはできそう
// 　https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Using_IIR_filters

const myAudio = document.createElement("audio");
myAudio.src = "test.wav";

const actx = new AudioContext();
const track = actx.createMediaElementSource(myAudio);

// これはローパスフィルタの例
const biquardFilter = actx.createBiquadFilter();
biquardFilter.frequency = 0; // 1000Hz
biquardFilter.Q = 0; // なぜかどちらの値も反映されていない。。。
//track.connect(biquardFilter).connect(actx.destination);

// これはリバーブの例
//const feedForward = [0.00020298, 0.0004059599, 0.00020298];
//const feedBackward = [1.0126964558, -1.9991880801, 0.9873035442];
const feedForward = [];
let feedBackward = [1];
const size = 20;
for (let i = 0; i < size; i++) {
  feedForward[i] = (i - size) * (i - size) / (size * size);
  feedForward[i] /= 4;
}
const iirFilter = actx.createIIRFilter(feedForward, feedBackward);

function playSound(){
  if(actx.state == "suspended") {
    actx.resume();
  }

  myAudio.play();
}

function switchFX(){
  let fx = document.getElementById("FXButton");
  if(fx.innerHTML == "Effect -ON-") {
    fx.innerHTML = "Effect -OFF-";
    track.disconnect();
    track.connect(actx.destination);
  }
  else if(fx.innerHTML == "Effect -OFF-") {
    fx.innerHTML = "Effect -ON-";
    track.disconnect();
    track.connect(iirFilter).connect(actx.destination);
  }
}

// ============== ここからは別の話 ========

let fps = 60;
function loop(){
  setTimeout(() => {
    requestAnimationFrame(loop);
    let world_time = Number(document.getElementById("world_time").innerHTML);
    world_time += 1 / fps;
    document.getElementById("world_time").innerHTML = world_time;

    const image = document.getElementById("testImg");
    image.animate(
        [
          { transform: `translateX(0)`},
          { transform: `translateX(${Math.sin(world_time) * 200 + 100}px)`}
        ],
        {
          fill: 'forwards',
          duration: 0,
        },
    );
  }, 1000 / fps);
}
loop();

function b(){
  console.log("get!");
}