console.log("こちらは.jsファイルから実行しています。");
console.log("＜聞こえてますかー！");

// 基本の使い方
let variableA; // 宣言
variableA = "最初の代入A"; // 代入
console.log(variableA); // 参照

// 宣言と代入を同時にできる
let variableB = "最初の代入B";
console.log(variableB);

// letで宣言した変数の中身は代入で上書きできる
variableA = "二回目の代入A";
console.log(variableA);

// 変数に別の変数の値を代入することもできる
variableA = variableB;
console.log(variableA);

console.log(-123);
console.log(0);
console.log(0xff);
console.log(-0.1);
console.log(.123);
console.log(-3.0);
console.log(.0);