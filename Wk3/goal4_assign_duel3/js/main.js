// Trenton May
// 13/2/2015
// Duel 3


var winner = false; //used to see if winnerCheck returns a winner


fighter1={name:"SwagbobYoloPants", health:100, damage:20 }; //stores all information for fighter1 in an object
fighter2={name:"Lieutenant Dan", health:100, damage:20 };   //stores all information for fighter2 in an object

var nameSelect1 = document.getElementById("kabal"); //creates a variable to select the id kabal so it can be changed
var nameSelect2 = document.getElementById("kratos");    //creates a variable to select the id kratos so it can be changed
var roundSelect = document.getElementById("round"); //creates a variable to select the id round so it can be changed
var scores = document.getElementById("scores"); //creates a variable to select the id scores so it can be changed
var round = 0;

function winnerCheck(){    //this is the winnerCheck function. Checks if there is a winner each round
    if(fighter1.health <= 0 && fighter2.health <= 0){   //this says that if player1 and player2 die in the same round there is no winner
        scores.innerHTML = "<p>No Winner</p>";  //allow the html to display "No Winner" if this statement returns true
        winner = true;  //keeps the tied alert from running if there is actually a winner
        return true;    //ends the function and breaks the loop

    }else if(fighter1.health <= 0){   //If player1 health reaches 0 then he is dead and player2 wins
        scores.innerHTML = "<p>Game Over " + fighter2.name + " Wins</p>";   //Allows the html to display that fighter2 wins
        winner = true;  //keeps the tied alert from running if there is actually a winner
        return true;    //ends the function and breaks the loop

    }else if(fighter2.health <= 0){   //If player2 health reaches 0 then he is dead and player2 wins
        scores.innerHTML = "<p>Game Over" + fighter1.name + " Wins</p>";    //Allows the html to display that fighter 1 wins
        winner = true;  //keeps the tied alert from running if there is actually a winner
        return true;    //ends the function and breaks the loop

    }else{  //If no one won yet then it runs this alert to say the round is over
        nameSelect1.innerHTML = "<p>" + fighter1.name + ": " + fighter1.health + "</p>";    //Makes the html display the name and health of fighter1
        nameSelect2.innerHTML = "<p>" + fighter2.name + ": " + fighter2.health + "</p>";    //Makes the html display the name and health of fighter2
        roundSelect.innerHTML = "<p>Round " + round + "</p>";   //Makes the html display the round number

        if(round == 10){    //statement used if round is equal to 10
            scores.innerHTML = "<p> It's a Tie</p>";    //if the round is equal to 10 then this tells the html to say it is a tie
        }
    }
}

document.getElementById("fight_box").onclick = function(e){ //This is the onclick function used for when the user clicks on the fight box
    //console.log(e);
    fight();    //calls on the fight function to allow for damage calculation after the button is clicked
    e.preventDefault(); //this line and the line below prevents bubbling
    return false;

};

function fight(){   //this is the beginning of the function that will loop
        round++;    //Increments the round number after each time this function is called upon
        if(round >10 || winner == true){    //Stops the fight function from running again if the round went past 10 or if a winner was found
            return false;
        }

        //below is the damage counter
        fighter1.health = fighter1.health - Math.floor(Math.random() * (fighter2.damage - (fighter2.damage / 2)) + (fighter2.damage / 2)); //calculates the damage a player does each round
        fighter2.health = fighter2.health - Math.floor(Math.random() * (fighter1.damage - (fighter1.damage / 2)) + (fighter1.damage / 2)); //calculates the damage a player does each round

        winnerCheck(); //Calls on the winnerCheck function so that we may see if a winner has been found.
}


