import {
  GAMETYPE_MENU
} from "./constants.js";


var random;
var gamemode
var canvasH;
var gametype;
var canvasW;
var moles = [];
var help = [];
var labels = [];
var helptexts = [];
var score;
var speedchange;
var difficultyindex;
var moleindex;
var resets = [];
var oldmole;
var basicnumbers = [];
var titles = [];
var backtms = [];
var backs = [];
var speed;
var difficulties = [];
var labelindex;
var scale;
var scoretext = [];
var randomlist = [0, 1, 2, 3, 4, 5, 6, 7, 8];


const Vars = {
  stage: null,
  random: random,
  canvasH: canvasH,
  canvasW: canvasW,
  holes: [],
  moles: moles,
  help: help,
  labels: labels,
  gametype: GAMETYPE_MENU,
  gamemode: null,
  helptexts: helptexts,
  score: score,
  speedchange: speedchange,
  difficultyindex: difficultyindex,
  moleindex: moleindex,
  resets: resets,
  oldmole: oldmole,
  basicnumbers: basicnumbers,
  titles: titles,
  backtms: backtms,
  backs: backs,
  speed: speed,
  difficulties: difficulties,
  labelindex: labelindex,
  scale: scale,
  scoretext: scoretext,
  randomlist: randomlist,
  score: 0
};

export default Vars;