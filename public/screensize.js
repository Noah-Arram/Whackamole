import * as Constants from "./constants.js"

var game;

var screens = {
  uidetect: function() {
    var oldwidth = document.body.clientWidth;

    if (document.body.clientWidth < 1675) {
      Constants.leftbanner.style.display = "none";
      Constants.rightbanner.style.display = "none";
    } else {
      Constants.leftbanner.style.display = "block";
      Constants.rightbanner.style.display = "block";
    }

    game = document.getElementById("demoCanvas")

    var viewport = {
      width: window.innerWidth,
      height: window.innerHeight
    };

    if (game.height / game.width > viewport.height / viewport.width) {
      var newGameHeight = viewport.height;
      var newGameWidth = newGameHeight * game.width / game.height;
    } else {
      var newGameWidth = viewport.width;
      var newGameHeight = newGameWidth * game.height / game.width;
    }
  }
}

export default screens;