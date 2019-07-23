import ui_manager from "./ui_manager.js"

import utils from "./utilities.js"

import update from "./update.js"

import * as Constants from "./constants.js"

import Vars from "./variables.js"

var button = {
  labelclick: function() {
    if (Vars.gametype === Constants.GAMETYPE_HMENU) {
      ui_manager.helptextui()
      Vars.gametype = Constants.GAMETYPE_HTEXTDISPLAYING;
    } else {
      Constants.gamemode[Vars.labelindex - 1] = true;
      Vars.gametype = Constants.GAMETYPE_DIFFICULTYSELECT;
      ui_manager.difficultyselectui()
    }
  },
  backclick: function() {
    if (Vars.gametype === Constants.GAMETYPE_HMENU) {
      Vars.gametype = Constants.GAMETYPE_MENU;
      ui_manager.gametype1ui()
    }
    if (Vars.gametype === Constants.GAMETYPE_HTEXTDISPLAYING) {
      Vars.gametype = Constants.GAMETYPE_HMENU;
      for (let l = 0; l < 4; l++) {
        ui_manager.gametype2ui()
        Constants.helptype[l] = false;
      }
    }
    if (Vars.gametype === Constants.GAMETYPE_DIFFICULTYSELECT) {
      Vars.gametype = Constants.GAMETYPE_MENU;
      ui_manager.gametype1ui()
    }

  },
  btmclick: function() {
    Vars.gametype = Constants.GAMETYPE_MENU;
    for (let i = 0; i < 4; i++) {
      for (let l = 0; l < 9; l++) {
        ui_manager.gametype1ui()
        Constants.gamemode[i] = false;
        Vars.score = 0;
        utils.updateScore()
        clearTimeout(Vars.updatetimeout);


      }
    }
  },
  helpclick: function() {
    Vars.gametype = Constants.GAMETYPE_HMENU;
    ui_manager.gametype2ui()
  },
  difficultyclick: function() {
    Vars.gametype = Constants.GAMETYPE_GAMESTART;
    ui_manager.gametype0ui()
    update.update()
    Vars.speedchange = Vars.difficultyindex * 10;
  }
}

export default button;