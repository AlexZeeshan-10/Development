var image1 = document.querySelectorAll(".img1")[0];
image1.setAttribute(
  "src",
  "./images/dice" + (Math.floor(Math.random() * 6) + 1) + ".png",
);

var image2 = document.querySelectorAll(".img2")[0];
image2.setAttribute(
  "src",
  "./images/dice" + (Math.floor(Math.random() * 6) + 1) + ".png",
);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = " PLayer 1 Wins...!!!";
} else if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = " It's a TIE";
} else {
  document.querySelector("h1").innerHTML = "Player 2 Wins...!!!";
}
