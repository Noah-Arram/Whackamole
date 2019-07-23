script ui manager determines which of the ui elements are visible at any given time.

script spawner handles creating every shape, bitmap, text etc at the start of the game and is also responsible for creating the containers in the game and pushing everything into the correct arrays and containers.

script utilities handles the repeated functions that the game uses such as randomising the order of elements in an array so that gameobjecrs are in random positions, updating the score and positioning the numbers in the game.

script buttons handles what happens when objects are clicked. This is done by having a fuction for the actions that take plave when an onject is clicked and then when the objects are clicked their respective "click function" is called.

script checker checks the gamerule in play and calls the appropriate scripts

script update is a script that is run every 0.75 to 1.5 seconds (the time between repeats is based on the score of the player and the level of difficulty that they are playing on.). the script updates the random numbers, makes a random mole visible based on the random nubers and positions the numbers randomly.

script main handles everything that takes place instantly when the game is loaded. this includes calling all of the functions in the spawner script, setting the fps, creating a ticker, ctreating a stage and setting the gametype. the main script also holds all of the global variable apart from one that are in the game.

script screensize checks the size of the window that the game is being played in and based on that info either shows or hides immages around the game in the background of the website.

script control contains varuables that dont change and script variables contains variables that do change

script scorer is responsible for checking whether to award a point when a mole is clicked. a whole script is required for this as the script must first check what gamerule is being played, then check whether the number that has been placed randomly next to the mole (that is in a random position), then check whether the number next to the mole fits the gamerule being played

script pointawarder either awards or removes a paint from the players score based on whether they clicked a mole that follows the gamerule in play.

the above scripts are all modules

main js is the script that is called on load.
