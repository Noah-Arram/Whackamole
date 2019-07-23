import utils from "./utilities.js"

import Vars from "./variables.js"

var scoreawarder = {
  scorer: function() {
    Vars.score = Vars.score + 1;
    utils.updateScore();
    event.target.visible = false;
  },
  lose: function() {
    if (Vars.score !== 0) {
      Vars.score = Vars.score - 1;
      utils.updateScore();
    }
    event.target.visible = false;
  }
}

export default scoreawarder;