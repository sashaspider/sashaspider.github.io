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


var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");
function setUserName() {
  var myName = prompt("Введите своё имя");
  localStorage.setItem("name", myName);
  myHeading.textContent = "BLINN2025 и " + myName; 
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  var storedName = localStorage.getItem("name");
  myHeading.textContent = "BLINN2025 и " + storedName;
}
myButton.onclick = function () {
  setUserName();
};

