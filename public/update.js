import utils from "./utilities.js"

import * as Constants from "./constants.js"

import Vars from "./variables.js"

var update = {
  update: function() {

    if (Vars.gametype === Constants.GAMETYPE_GAMESTART) {
      utils.positionNumbers();
      utils.getRandom(1, 9);

      for (let i = 0; i < 9; i++) {
        Vars.moles[i].visible = (Vars.random === i);
      }
    }



    Vars.speed = Constants.defaultspeed - (Vars.score * Vars.speedchange);
    if (Vars.speed < Constants.minspeed) {
      Vars.speed = Constants.minspeed;
    }
    //if score goes up by 5 speed up by 0.25sec
    Vars.updatetimeout = setTimeout(update.update, Vars.speed);

  }
}

export default update;