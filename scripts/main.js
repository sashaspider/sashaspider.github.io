var pushka2 = document.querySelector("img");

pushka2.onclick = function () {
    var mySrc = pushka2.getAttribute("src");
    if (mySrc === "images/pushechka.jpeg") {
        pushka2.setAttribute("src", "images/pushechka2.jpeg");
        alert("ну доигрался");
    } else {
        pushka2.setAttribute("src", "images/pushechka.jpeg");
        alert("хорошо, возвращаю");
    }
}

const audio = new Audio("sounds/phub.mp3");
const buttons = document.querySelectorAll("a");
buttons.forEach(button => {
   button.addEventListener("mousedown", (e) => {
    if (e.button === 1) { 
      e.preventDefault(); 
      audio.play();
    }
  });
});

