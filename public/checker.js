//check which gamemode is being played
//create scoring function for each gamemode
//run correct scoring function based on each gamemode
import scorer from "./scorer.js"

import * as Constants from "./constants.js"

import Vars from "./variables.js"

var checker = {
  gameChecker: function() {
    if (Vars.gamemode === Constants.GAMEMODE_ODD) {
      scorer.oddscorer()
    }
    if (Vars.gamemode === Constants.GAMEMODE_EVEN) {
      scorer.evenscorer()
    }
    if (Vars.gamemode === Constants.GAMEMODE_SQUARE) {
      scorer.squarescorer()
    }
    if (Vars.gamemode === Constants.GAMEMODE_PRIME) {
      scorer.primescorer()
    }
  }
}

export default checker;