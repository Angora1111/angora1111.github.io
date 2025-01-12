async function wait(second){
  return new Promise(resolve => setTimeout(resolve, 1000 * second));
}

async function opening() {
  anime({
    targets: "#start-text",
    fontSize: {
      value: "80px",
      duration: 800
    },
  })
  anime({
    targets: "#start-text",
    rotateZ: [
      {
        value: 20,
        duration: 100,
        easing: "linear",
      },
      {
        value: -10,
        duration: 100,
        delay: 0,
        easing: "linear",
      },
      {
        value: 0,
        duration: 100,
        delay: 0,
        easing: "linear",
      }
    ]
  })

  await wait(1);

  anime({
    targets: "#start-cover",
    background: {
      value: "rgba(10, 10, 10, 0)",
      duration: 10000
    }
  })

  anime({
    targets: "#circle1",
    scale: 0.6,
    direction: "alternate",
    loop: true,
  })
  await wait(0.12);
  anime({
    targets: "#circle2",
    scale: 0.6,
    direction: "alternate",
    loop: true,
  })
  await wait(0.12);
  anime({
    targets: "#circle3",
    scale: 0.6,
    direction: "alternate",
    loop: true,
  })

  await wait(1.2-0.24);

  document.getElementById("start-cover-parent").innerHTML = "";
}

async function subOpening() {
  await wait(0.5);

  anime({
    targets: "#start-cover",
    background: {
      value: "rgba(10, 10, 10, 0)",
      duration: 5000
    }
  })

  anime({
    targets: "#title",
    translateX: -1000,
    direction: "reverse",
    duration: 1000,
    easing: "easeInOutCubic"
  })

  await wait(1.2);

  document.getElementById("start-cover-parent").innerHTML = "";
}