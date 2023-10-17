
var scene = 0;
const remote = require('electron').remote;

function init() {

  document.body.style.height = window.innerHeight + "px";

  console.log("initialisation");
}

function next() {

  var nextButton = document.getElementById("next-button");
  var mainInput = document.getElementById("main-input");
  var mainInputContainer = document.getElementById("main-input-container");
  var nextButtonContainer = document.getElementById("next-button-container");
  var searchButtonContainer = document.getElementById("search-button-container");

  scene++;
  if (scene == 0) {
    updateText("centerText", "Bonjour et bienvenue dans kora !");
    updateText("topRightText", "");
    updateText("topLeftText", "");
  } else if (scene == 1) {
    updateText("centerText", "Détendez vous, toutes vos actions ici ne sont pas déterminantes et définitives");
    updateText("topRightText", "");
    updateText("topLeftText", "");
  } else if (scene == 2) {
    updateText("centerText", "Vous pouvez à tout moment revenir en arrière en appuyant sur le bouton bleu en haut à gauche");
    updateText("topRightText", "");
    updateText("topLeftText", "<b style='font-size: 35px'>↥</b> Ce bouton");
  } else if (scene == 3) {
    updateText("centerText", "Vous pouvez également, quand vous le désirez, faire disparaitre cet écran en appuyant sur le bouton rouge en haut à droite");
    updateText("topRightText", "Ce bouton <b style='font-size: 35px'>↥</b>");
    updateText("topLeftText", "");
    nextButton.innerHTML = "Suivant";
  } else if (scene == 4) {
    updateText("centerText", "Vous avez maintenant tous les outils pour vous épanouir dans kora !");
    updateText("topRightText", "");
    updateText("topLeftText", "");
    nextButton.innerHTML = "Commencer";
    desappears(mainInputContainer);
    desappears(searchButtonContainer);
    nextButtonContainer.style.display = "flex";
  } else if (scene == 5) {
    
    remote.getCurrentWindow().loadURL("https://bigstones.fr/kora"); //<- renvoyer vers recherche bigstones
  }

}

function back() {

  if (scene != 0) {
    scene -= 2;
    next();
  }

}

function closed() {

  remote.getCurrentWindow().close();

}

function focusMainInput() { updateText("main-input-info", "Ecrivez maintenant ce que vous voulez chercher") }
function outfocusMainInput() { updateText("main-input-info", "Cliquer ici puis saisissez ce que vous voulez chercher") }

function appears(ele) {

  if (ele.classList.contains("animation-entreeOpacity")) ele.classList.remove("animation-entreeOpacity");
  if (ele.classList.contains("animation-sortieOpacity")) ele.classList.remove("animation-sortieOpacity");
  ele.style.display = "flex";
  ele.offsetWidth;
  ele.classList.add("animation-entreeOpacity");

}

function desappears(ele) {

  if (ele.classList.contains("animation-entreeOpacity")) ele.classList.remove("animation-entreeOpacity");
  if (ele.classList.contains("animation-sortieOpacity")) ele.classList.remove("animation-sortieOpacity");
  ele.style.display = "none";
  ele.offsetWidth;
  ele.classList.add("animation-sortieOpacity");

}

function updateText(id, newmsg) {

  var target = document.getElementById(id);
  if (target.classList.contains("updateAnimationText")) target.classList.remove("updateAnimationText");

  target.innerHTML = newmsg;
  target.offsetWidth;

  target.classList.add("updateAnimationText");

}
