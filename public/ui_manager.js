import Vars from "./variables.js"

import * as Constants from "./constants.js"

var ui_manager = {
  //gametype0 = gamestart, gametype1 = menu and gametype2 = help menu
  gametype0ui: function() {
    holescontainer.visible = true;
    Vars.scoretext[0].visible = true;
    Vars.resets[0].visible = true;
    Vars.backtms[0].visible = true;
    difficultycontainer.visible = false;
    Vars.backs[0].visible = false;
    Vars.titles[2].visible = false;
    molescontainer.visible = true;
    basicnumberscontainer.visible = true;
  },
  gametype1ui: function() {
    for (let d = 0; d < 3; d++) {
      holescontainer.visible = false;
      labelscontainer.visible = true;
      Vars.titles[d].visible = Vars.titles[d] === Vars.titles[0];
      Vars.scoretext[0].visible = false;
      Vars.resets[0].visible = false;
      Vars.backtms[0].visible = false;
      Vars.backs[0].visible = false;
      Vars.help[0].visible = true;
      molescontainer.visible = false;
      basicnumberscontainer.visible = false;
      difficultycontainer.visible = false;
    }
  },
  gametype2ui: function() {
    labelscontainer.visible = true;
    Vars.titles[0].visible = false;
    Vars.backs[0].visible = true;
    Vars.help[0].visible = false;
    Vars.helptexts[0].visible = false;
    Vars.titles[1].visible = true;
    Vars.backs[0].y = 650;
  },
  helptextui: function() {
    Constants.helptype[Vars.labelindex - 1] = true;
    Vars.helptexts[0].visible = true;
    Vars.helptexts[0].text = Constants.helpcontent[Vars.labelindex - 1];
    Vars.help[0].visible = false;
    labelscontainer.visible = false;
    Vars.titles[1].visible = false;
    Vars.backs[0].y = 675;
  },
  difficultyselectui: function() {
    labelscontainer.visible = false;
    Vars.titles[0].visible = false;
    Vars.help[0].visible = false;
    difficultycontainer.visible = true;
    Vars.backs[0].visible = true;
    Vars.titles[2].visible = true;
  }
}

export default ui_manager;