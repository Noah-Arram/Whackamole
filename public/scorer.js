import scoreawarder from "./scoreawarder.js"

import Vars from "./variables.js"

var scorer = {
  oddscorer: function() {

    if ((Vars.randomlist[Vars.moleindex] + 1) % 2 === 1) {
      scoreawarder.scorer()
    } else {
      scoreawarder.lose()
    }
  },
  evenscorer: function() {
    if ((Vars.randomlist[Vars.moleindex] + 1) % 2 === 0) {
      scoreawarder.scorer()
    } else {

      scoreawarder.lose()

    }
  },
  squarescorer: function() {
    if ((Vars.randomlist[Vars.moleindex] + 1) % 2 === 1) {
      scoreawarder.scorer()
    } else {

      scoreawarder.lose()

    }
  },
  primescorer: function() {
    //the "magic numbers" 2,3,5 and 7 are all the prime numbers from one to 9 and the easiest way to check if a point should be awarded is just to check for those specific numbers.
    if (Vars.randomlist[Vars.moleindex] + 1 === 2 || Vars.randomlist[Vars.moleindex] + 1 === 3 || Vars.randomlist[Vars.moleindex] + 1 === 5 || Vars.randomlist[Vars.moleindex] + 1 === 7) {
      scoreawarder.scorer()
    } else {
      scoreawarder.lose()
    }

  },
}

export default scorer;