import checker from "./checker.js"

import button from "./buttons.js"

import utils from "./utilities.js"

import * as Constants from "./constants.js"

import Vars from "./variables.js"

var spawn = {
  basicNumbers: function() {
    for (let i = 1; i < 10; i++) {
      var number = new createjs.Text(i, "80px comic sans MS", "#00000");
      stage.addChild(number);
      basicnumberscontainer.addChild(number);
      Vars.basicnumbers.push(number);
    }
  },
  createLabels: function() {
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 2; j++) {
        var l = 2 * i + j;
        var label = new createjs.Bitmap("label" + l + ".png");
        stage.addChild(label);
        labelscontainer.addChild(label);
        label.x = Constants.lpositions[i][j][0];
        label.y = Constants.lpositions[i][j][1];
        Vars.labels.push(label);
        label._index2 = Vars.labels.length;
        label.addEventListener("click", function(event) {
          Vars.labelindex = event.target._index2;
          button.labelclick()
        })
      }
    }
  },
  createTitle: function() {
    var title = new createjs.Bitmap("title.png");
    stage.addChild(title);
    title.x = 265;
    title.y = 100;
    Vars.titles.push(title);
  },

  createhelptitle: function() {
    var htitle = new createjs.Bitmap("helpselectiontext.png");
    stage.addChild(htitle);
    htitle.x = 150;
    htitle.y = 100;
    htitle.visible = false;
    Vars.titles.push(htitle);
  },
  createdifficultytitle: function() {
    var dtitle = new createjs.Bitmap("difficulty title.png");
    stage.addChild(dtitle);
    dtitle.x = 300;
    dtitle.y = 100;
    dtitle.visible = false;
    Vars.titles.push(dtitle);
  },
  createhelpbutton: function() {
    var helpbutton = new createjs.Bitmap("help.png");
    stage.addChild(helpbutton);
    helpbutton.x = 500;
    helpbutton.y = 650;
    Vars.help.push(helpbutton);
    helpbutton.addEventListener("click", function(event) {
      button.helpclick()
    })
  },
  createbackbutton: function() {
    var back = new createjs.Bitmap("back.png");
    stage.addChild(back);
    back.x = 500;
    back.y = 650;
    back.visible = false;
    Vars.backs.push(back);
    back.addEventListener("click", function(event) {
      button.backclick()
    })

  },
  createscore: function() {
    var text = new createjs.Text("Score: 0", "40px comic sans MS", "#00000");
    text.x = 50;
    text.y = 700;
    text.visible = false;
    text.textBaseline = "alphabetic";
    stage.addChild(text);
    Vars.scoretext.push(text);

  },
  createhelptext: function() {
    var helpname = new createjs.Text("", "40px comic sans MS", "#00000");
    helpname.x = 75;
    helpname.y = 100;
    stage.addChild(helpname);
    Vars.helptexts.push(helpname);
  },
  createholes: function() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        var hole = new createjs.Shape();
        hole.graphics.beginFill("black").drawEllipse(0, 0, 125, 75);
        hole.x = Constants.positions[i][j][0];
        hole.y = Constants.positions[i][j][1];
        stage.addChild(hole);
        holescontainer.addChild(hole);
        Vars.holes.push(hole);
      }
    }
  },
  createmoles: function() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        var mole = new createjs.Bitmap("mole.png");
        stage.addChild(mole);
        mole.x = Constants.positions[i][j][0] + Constants.offsetx;
        mole.y = Constants.positions[i][j][1] + Constants.offsety;
        mole._index = Vars.moles.length;
        Vars.moles.push(mole);
        molescontainer.addChild(mole);
        mole.addEventListener("click", function(event) {
          Vars.moles[event.target._index].visible = false;
          Vars.moleindex = event.target._index;
          checker.gameChecker();
        })
      }

      //
    }
  },
  createresetbutton: function() {
    var reset = new createjs.Bitmap("reset.png");
    reset.x = 850;
    reset.y = 660;
    Vars.resets.push(reset);
    reset.visible = false;
    stage.addChild(reset);
    reset.addEventListener("click", function(event) {
      score = 0;
      utils.updateScore()

    })

  },
  createbtmbutton: function() {
    var backtm = new createjs.Bitmap("backtm.png");
    backtm.x = 450;
    backtm.y = 680;
    Vars.backtms.push(backtm);
    backtm.visible = false;
    stage.addChild(backtm);
    backtm.addEventListener("click", function(event) {
      button.btmclick()
    })
  },
  createdifficultybuttons: function() {
    for (let i = 0; i < 3; i++) {
      var difficultybutton = new createjs.Bitmap(Constants.difficulty[i] + ".png");
      difficultybutton.x = Constants.difficultyx[i];
      difficultybutton.y = 400;
      Vars.difficulties.push(difficultybutton);
      stage.addChild(difficultybutton)
      difficultycontainer.addChild(difficultybutton);
      difficultybutton._index3 = Vars.difficulties.length
      difficultybutton.addEventListener("click", function(event) {
        Vars.difficultyindex = event.target._index3;
        button.difficultyclick()
      })
    }
  },
  containers: function() {
    window.labelscontainer = new createjs.Container();
    stage.addChild(labelscontainer);

    window.difficultycontainer = new createjs.Container();
    stage.addChild(difficultycontainer);
    difficultycontainer.visible = false;

    window.holescontainer = new createjs.Container();
    stage.addChild(holescontainer);
    holescontainer.visible = false;

    window.molescontainer = new createjs.Container();
    stage.addChild(molescontainer);
    molescontainer.visible = false;

    window.basicnumberscontainer = new createjs.Container();
    stage.addChild(basicnumberscontainer);
    basicnumberscontainer.visible = false;
  },

  spawnall: function() {
    spawn.containers()

    spawn.basicNumbers()

    spawn.createLabels()

    spawn.createTitle()

    spawn.createhelpbutton()

    spawn.createbackbutton()

    spawn.createhelptext()

    spawn.createscore()

    spawn.createholes()

    spawn.createmoles()

    spawn.createresetbutton()

    spawn.createbtmbutton()

    spawn.createhelptitle()

    spawn.createdifficultybuttons()

    spawn.createdifficultytitle()
  }
}

export default spawn;