//check which gamemode is being played
//create scoring function for each gamemode
//run correct scoring function based on each gamemode
import scorer from "./scorer.js"

import * as Constants from "./constants.js"

var checker = {
  gameChecker: function() {
    if (Constants.gamemode[0] === true) {
      scorer.oddscorer()
    }
    if (Constants.gamemode[1] === true) {
      scorer.evenscorer()
    }
    if (Constants.gamemode[2] === true) {
      scorer.squarescorer()
    }
    if (Constants.gamemode[3] === true) {
      scorer.primescorer()
    }
  }
}

export default checker;