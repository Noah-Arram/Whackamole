import spawn from "./spawner.js"

import screens from "./screensize.js"

import utils from "./utilities.js"

import * as Constants from "./constants.js"

import Vars from "./variables.js"

var stage;
var random;
var canvasH;
var gametype;
var canvasW;
var holes = [];
var moles = [];
var help = [];
var labels = [];
var helptexts = [];
var score;
var speedchange;
var difficultyindex;
var moleindex;
var resets = [];
var oldmole;
var basicnumbers = [];
var titles = [];
var backtms = [];
var backs = [];
var speed;
var difficulties = [];
var labelindex;
var scale;
var scoretext = [];
var randomlist = [0, 1, 2, 3, 4, 5, 6, 7, 8];



var startGame = function() {
  utils.getRandom()

  Vars.score = 0;
  Vars.speed = 1500;

  spawn.containers()

  spawn.basicNumbers()

  spawn.createLabels()

  spawn.createTitle()

  spawn.createhelpbutton()

  spawn.createbackbutton()

  spawn.createhelptext()

  spawn.createscore()

  spawn.createholes()

  spawn.createmoles()

  spawn.createresetbutton()

  spawn.createbtmbutton()

  spawn.createhelptitle()

  spawn.createdifficultybuttons()

  spawn.createdifficultytitle()


}

var init = function() {
  createjs.Ticker.setFPS(120);
  window.stage = new createjs.Stage("demoCanvas");
  createjs.Ticker.addEventListener("tick", window.stage);
  screens.uidetect()
  setInterval(screens.uidetect, 1);
  for (let l = 0; l < 4; l++) {
    Constants.gamemode[l] = false;
  }
  startGame();
}

window.addEventListener("load", init);

export default init;