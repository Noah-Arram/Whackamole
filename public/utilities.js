import Vars from "./variables.js"

import screens from "./screensize.js"

import * as Constants from "./constants.js"

import spawn from "./spawner.js"

var list = [];
var utils = {
  getRandom: function(from, to) {
    for (let i = from; i < to; i++) {
      list.push(i);
      Vars.random = list[Math.floor(Math.random() * to)]
    }
  },


  positionNumbers: function() {
    Vars.randomlist = _.shuffle(Vars.randomlist);

    for (let l = 0; l < 9; l++) {
      if (Vars.basicnumbers[l].visible === false) {
        Vars.basicnumbers[l].visible = true;
      }
    }

    for (let i = 0; i < 9; i++) {
      Vars.basicnumbers[Vars.randomlist[i]].x = Vars.holes[i].x + 150;
      Vars.basicnumbers[Vars.randomlist[i]].y = Vars.holes[i].y + 10;
    }
  },
  updateScore: function() {
    Vars.scoretext[0].text = "Score: " + Vars.score;
  },


  init: function() {
    createjs.Ticker.setFPS(120);
    window.stage = new createjs.Stage("demoCanvas");
    createjs.Ticker.addEventListener("tick", window.stage);
    screens.uidetect()
    setInterval(screens.uidetect, 1);
    Vars.score = 0;
    Vars.speed = 1500;
    utils.getRandom()

    spawn.spawnall()
  }
}

export default utils;