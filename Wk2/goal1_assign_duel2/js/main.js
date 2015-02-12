// Trenton May
// 4/2/2015
// Analyze duel


/*  Commented this old section out. I kept it just in case if it becomes useful later
var player1 = "SwagbobYoloPants"; //name of player 1
var player2 = "Lieutenant Dan"; //name of player 2

var player1hp = 100;    //how much health player 1 has
var player2hp = 100;    //how much health player 2 has

var player1dam = 20;    //max damage player 1 can do each round
var player2dam = 22;    //max damage player 2 can do each round
*/

var winner = false; //used to see if winnerCheck returns a winner

var fighter1 = ["SwagbobYoloPants", 100, 20]; //array for fighter 1. Contains name, health, and damage
var fighter2 = ["Lieutenant Dan", 100, 22]; //array for fighter 2. Contains name, health, and damage

function winnerCheck(round){    //this is the winnerCheck function. Checks if there is a winner each round
    if(fighter1[1] <= 0 && fighter2[1] <= 0){   //this says that if player1 and player2 die in the same round there is no winner
        alert("No Winner"); //lets the user know there is no winner since both players died
        winner = true;  //keeps the tied alert from running if there is actually a winner
        return true;    //ends the function and breaks the loop

    }else if(fighter1[1] <= 0){   //If player1 health reaches 0 then he is dead and player2 wins
        alert("GAME OVER\n " + fighter2[0] + " Wins");  //tells the user player2 won
        winner = true;  //keeps the tied alert from running if there is actually a winner
        return true;    //ends the function and breaks the loop

    }else if(fighter2[1] <= 0){   //If player2 health reaches 0 then he is dead and player2 wins
        alert("GAME OVER\n " + fighter1[0] + " Wins");  //alerts the user that player 1 wins
        winner = true;  //keeps the tied alert from running if there is actually a winner
        return true;    //ends the function and breaks the loop

    }else{  //If no one won yet then it runs this alert to say the round is over
        alert(fighter1[0] + ":" + fighter1[1] + "\nRound " + round + " Over \n" +  fighter2[0] + ":" + fighter2[1]);
    }
}

function fight(){   //this is the beginning of the function that will loop
    alert(fighter1[0] + ":" + fighter1[1] + " \nSTART\n " +  fighter2[0] + ":" + fighter2[1]);  //This alert runs before the loop and shows the health of the players
    for (var round = 1; round < 10; round++){   //adds up the round number after each loop

        //below is the damage counter
        fighter1[1] = fighter1[1] - Math.floor(Math.random() * (fighter2[2] - (fighter2[2] / 2)) + (fighter2[2] / 2)); //calculates the damage a player does each round
        fighter2[1] = fighter2[1] - Math.floor(Math.random() * (fighter1[2] - (fighter1[2] / 2)) + (fighter1[2] / 2)); //calculates the damage a player does each round

        if(winnerCheck(round)){ //Calls on the winnerCheck function so that we may see if a winner has been found. 
            break; //breaks the loop if a winner has been found
        }
    }
    if(winner == false){    //checks to see if both players lived after 10 rounds. If they did then it alerts them that it's a tie
        alert("It's a tie");

    }
}

fight(); //calls on the fight function to begin

