let exampleModal = new bootstrap.Modal(
    document.querySelector('#exampleModal'), {});
exampleModal.show();

function clickSecondButton(){
  // 内容を書き換える
  document.querySelector("#exampleModalBody").innerHTML = "押さないで！";

  // modalを表示
  let exampleModal = new bootstrap.Modal(
      document.querySelector('#exampleModal'), {});
  exampleModal.show();
}