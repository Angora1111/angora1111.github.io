function showMessage(message){
  console.log(message);
}

function show3Messages(message1, message2, message3){
  console.log(`1:${message1}, 2:${message2}, 3:${message3}`);
}

function show2Messages(message1, message2 = "りんご"){
  console.log(`1:${message1}, 2:${message2}(デフォルトは「りんご」)`);
}

function superCulculator(){
  return 2021 * 1010;
}
function product(a, b){
  return a * b;
}
function onesPlaceOfProduct(a, b){
  let product = a * b;

  // こっちは文字列に変換して行うやり方
  //let str = product.toString();
  //return str[str.length - 1];

  // こっちは余りを使うやり方
  return product % 10;
}
function tensPlaceOfProduct(a, b){
  let product = a * b;

  // こっちは文字列に変換して行うやり方
  // let str = product.toString();
  // return str[str.length - 2];

  // こっちはあまりを使うやり方
  return (product / 10) % 10;
}

let taro = {
  height: "100px",
  width: "200px",
  name: "たろう",
  age: 15
}

// クラスはこんな感じらしい ================
const taroClass = class {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  calc(){
    return this.x + this.y;
  }
}
let t2 = new taroClass(1, 2);
// =====================================

function hello(){
  console.log("こんにちはこんにちは");
}
function helloSomeone(name){
  console.log(`こんにちは${name}さん`);
}
function helloCircleArea(radius){
  let PI = 3.14;
  //console.log(radius * radius * PI);
  // Mathモジュールがある
  console.log(radius * radius * Math.PI);
}
function helloRectangleArea(width, height){
  console.log(width * height);
}
function circleArea(radius){
  return radius * radius * Math.PI;
}
function rectangleArea(width, height){
  return width * height;
}