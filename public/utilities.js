import Vars from "./variables.js"

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
}

export default utils;