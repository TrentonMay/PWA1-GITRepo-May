// Trenton May
// 13/2/2015
// Duel 3


/*  Commented this old section out. I kept it just in case if it becomes useful later
var player1 = "SwagbobYoloPants"; //name of player 1
var player2 = "Lieutenant Dan"; //name of player 2

var player1hp = 100;    //how much health player 1 has
var player2hp = 100;    //how much health player 2 has

var player1dam = 20;    //max damage player 1 can do each round
var player2dam = 22;    //max damage player 2 can do each round
*/

var winner = false; //used to see if winnerCheck returns a winner

//var fighter1 = ["SwagbobYoloPants", 100, 20]; //array for fighter 1. Contains name, health, and damage
//var fighter2 = ["Lieutenant Dan", 100, 22]; //array for fighter 2. Contains name, health, and damage

fighter1={name:"SwagbobYoloPants", health:100, damage:20 };
fighter2={name:"Lieutenant Dan", health:100, damage:22 };

var nameSelect1 = document.getElementById("kabal");
var nameSelect2 = document.getElementById("kratos");
var roundSelect = document.getElementById("round");
var scores = document.getElementById("scores");

function winnerCheck(){    //this is the winnerCheck function. Checks if there is a winner each round
    if(fighter1.health <= 0 && fighter2.health <= 0){   //this says that if player1 and player2 die in the same round there is no winner
        //alert("No Winner"); //lets the user know there is no winner since both players died
        scores.innerHTML = "<p>No Winner</p>";
        winner = true;  //keeps the tied alert from running if there is actually a winner
        return true;    //ends the function and breaks the loop

    }else if(fighter1.health <= 0){   //If player1 health reaches 0 then he is dead and player2 wins
        //alert("GAME OVER\n " + fighter2.name + " Wins");  //tells the user player2 won
        scores.innerHTML = "<p>Game Over " + fighter2.name + " Wins</p>";
        winner = true;  //keeps the tied alert from running if there is actually a winner
        return true;    //ends the function and breaks the loop

    }else if(fighter2.health <= 0){   //If player2 health reaches 0 then he is dead and player2 wins
        //alert("GAME OVER\n " + fighter1.name + " Wins");  //alerts the user that player 1 wins
        scores.innerHTML = "<p>Game Over" + fighter1.name + " Wins</p>";
        winner = true;  //keeps the tied alert from running if there is actually a winner
        return true;    //ends the function and breaks the loop

    //}else{  //If no one won yet then it runs this alert to say the round is over
        //alert(fighter1.name + ":" + fighter1.health + "\nRound " + round + " Over \n" +  fighter2.name + ":" + fighter2.health);

    //}
    }
}

document.getElementById("fight_box").onclick = function(e){
    console.log(e);
    fight();
    e.preventDefault();
    return false;
};

function fight(){   //this is the beginning of the function that will loop
    //alert(fighter1.name + ":" + fighter1.health + " \nSTART\n " +  fighter2.name + ":" + fighter2.health);  //This alert runs before the loop and shows the health of the players

        //below is the damage counter
        fighter1.health = fighter1.health - Math.floor(Math.random() * (fighter2.damage - (fighter2.damage / 2)) + (fighter2.damage / 2)); //calculates the damage a player does each round
        fighter2.health = fighter2.health - Math.floor(Math.random() * (fighter1.damage - (fighter1.damage / 2)) + (fighter1.damage / 2)); //calculates the damage a player does each round

        if(winnerCheck()){ //Calls on the winnerCheck function so that we may see if a winner has been found.

        }

        if(winner == false){    //checks to see if both players lived after 10 rounds. If they did then it alerts them that it's a tie
            //alert("It's a tie");
            scores.innerHTML = "<p> It's a tie</p>";
    }
}

//fight(); //calls on the fight function to begin

