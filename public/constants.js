const defaultspeed = 1500;

const minspeed = 750;

const GAMEMODE_ODD = 0;
const GAMEMODE_EVEN = 1;
const GAMEMODE_SQUARE = 2;
const GAMEMODE_PRIME = 3;

//bit later [t, f, f, f]

const helptype = [0, 1, 2, 3];

const GAMETYPE_GAMESTART = "gamestart";
const GAMETYPE_MENU = "menu";
const GAMETYPE_HMENU = "help menu";
const GAMETYPE_HTEXTDISPLAYING = "helptext displaying"
const GAMETYPE_DIFFICULTYSELECT = "difficulty select"

const offsetx = -7.5

const offsety = -80

const difficultyx = [200, 475, 800];

const difficulty = ["easy", "normal", "hard"];

const helpcontent = ["The odd numbers are all the numbers that exist \n that cannot be divided by 2. \n EG 3 is an odd number as if you have 3 blocks \n you can’t split them into 2 piles of the same amount \n each. 4 is not an odd number as if you have 4 blocks \n you could split them into 2 piles of the same amount \n each.", "The even numbers are all the numbers that exist \n that can be divided by 2. \n EG 4 is an even number as if you have 4 blocks \n you can split them into 2 piles of the same amount \n each. 3 is not an even number as if you have 3 blocks \n you can’t split them into 2 piles of the same amount \n each.", "Square numbers are numbers that have been \n made by multiplying a whole number by itself. \n 2 EG 4 is a square number as it can be made \n by multiplying a whole number by itself, in this \n case that number is 2 (2x2=4). 5 is not a square \n number as it cannot be made by multiplying a whole \n number by itself.", "Prime numbers are numbers can only be divided \n by themselves and by 1 to get an answer that is \n a whole number.  EG 7 is a prime number as the \n only numbers that it can be divided by to make \n a whole number is 7 (itself) and by 1. 8 is not a \n prime number as it can be divided by 1, 2 4 and \n eight to make a whole number. NOTE- 1 is not \n a prime number even though it seems to meet \n the requirements for a number to be a prime \n number.  This is because a prime number must be \n able to divide by 2 numbers, itself and 1. The \n number 1 can only divide by 1 number as itself and \n 1 are the same thing."];

const positions = [
  [
    [100, 100],
    [450, 100],
    [800, 100]
  ],
  [
    [100, 300],
    [450, 300],
    [800, 300]
  ],
  [
    [100, 500],
    [450, 500],
    [800, 500]
  ]
]
const lpositions = [
  [
    [275, 350],
    [600, 350]
  ],
  [
    [275, 550],
    [600, 550]
  ]
]

var leftbanner = document.getElementById("leftbanner")

var rightbanner = document.getElementById("rightbanner")

export {
  defaultspeed,
  minspeed,
  helptype,
  offsetx,
  offsety,
  difficultyx,
  difficulty,
  helpcontent,
  positions,
  lpositions,
  leftbanner,
  rightbanner,
  GAMETYPE_MENU,
  GAMETYPE_HMENU,
  GAMETYPE_GAMESTART,
  GAMETYPE_HTEXTDISPLAYING,
  GAMETYPE_DIFFICULTYSELECT,
  GAMEMODE_ODD,
  GAMEMODE_EVEN,
  GAMEMODE_SQUARE,
  GAMEMODE_PRIME
}