function startAnimation(){
  // 移動
  anime({
    targets: "#animation-box",
    translateX: 400
  })

  // 回転
  anime({
    targets: "#animation-text",
    rotate: 360
  })

  anime({
    targets: "#animation-box2",
    background: {
      value: "rgba(255, 255, 255, .0)",
      duration: 100
    },
    loop: 6,
    direction: "alternate",
    easing: `easeInOutSine`
  })
}