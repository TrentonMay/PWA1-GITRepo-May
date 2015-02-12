// Trenton May
// 4/2/2015
// Analyze duel

var player1 = "SwagbobYoloPants"; //name of player 1
var player2 = "Lieutenant Dan"; //name of player 2

var player1hp = 100;    //how much health player 1 has
var player2hp = 100;    //how much health player 2 has

var player1dam = 20;    //max damage player 1 can do each round
var player2dam = 22;    //max damage player 2 can do each round
var winner = false; //used to see if winnerCheck returns a winner

function winnerCheck(round){    //this is the winnerCheck function. Checks if there is a winner each round
    if(player1hp <= 0 && player2hp <= 0){   //this is says that if player1 and player2 die in the same round there is no winner
        alert("No Winner"); //lets the user know there is no winner since both players died
        winner = true;  //keeps the tied alert from running if there is actually a winner
        return true;    //ends the function and breaks the loop

    }else if(player1hp <= 0){   //If player1 health reaches 0 then he is dead and player2 wins
        alert("GAME OVER\n " + player2 + " Wins");  //tells the user player2 won
        winner = true;  //keeps the tied alert from running if there is actually a winner
        return true;    //ends the function and breaks the loop

    }else if(player2hp <= 0){   //If player2 health reaches 0 then he is dead and player2 wins
        alert("GAME OVER\n " + player1 + " Wins");
        winner = true;  //keeps the tied alert from running if there is actually a winner
        return true;    //ends the function and breaks the loop

    }else{  //If no one won yet then it runs this alert to say the round is over
        alert(player1 + ":" + player1hp + "\nRound " + round + " Over \n" +  player2 + ":" + player2hp);
    }
}

function fight(){   //this is the begining of the function that will loop
    alert(player1 + ":" + player1hp + " \nSTART\n " +  player2 + ":" + player2hp);  //This alert runs before the loop and shows the health of the players
    for (var round = 1; round < 10; round++){   //adds up the round number after each loop
        player1hp = player1hp - Math.floor(Math.random() * (player2dam - (player2dam / 2)) + (player2dam / 2)); //calculates the damage a player does each round
        player2hp = player2hp - Math.floor(Math.random() * (player1dam - (player1dam / 2)) + (player1dam / 2)); //calculates the damage a player does each round
        if(winnerCheck(round)){ //calls on the winner check function. Also checks if winner has been found
            break; //breaks the loop if a winner has been found
        }
    }
    if(winner == false){    //checks to see if both players lived after 10 rounds
        alert("It's a tie");

    }
}

fight(); //calls on the fight function to begin

