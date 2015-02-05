// Trenton May
// 4/2/2015
// Analyze duel

var player1 = "SwagbobYoloPants"; 
var player2 = "Lieutenant Dan";

var player1hp = 100;
var player2hp = 100;

var player1dam = 20;
var player2dam = 22;
var winner = false;

function winnerCheck(round){
    if(player1hp <= 0 && player2hp <= 0){
        alert("No Winner");
        winner = true;
        return true;

    }else if(player1hp <= 0){
        alert("GAME OVER\n " + player2 + " Wins");
        winner = true;
        return true;

    }else if(player2hp <= 0){
        alert("GAME OVER\n " + player1 + " Wins");
        winner = true;
        return true;

    }else{
        alert(player1 + ":" + player1hp + "\nRound " + round + " Over \n" +  player2 + ":" + player2hp);
    }
}

function fight(){
    alert(player1 + ":" + player1hp + " \nSTART\n " +  player2 + ":" + player2hp);
    for (var round = 1; round < 10; round++){
        player1hp = player1hp - Math.floor(Math.random() * (player2dam - (player2dam / 2)) + (player2dam / 2));
        player2hp = player2hp - Math.floor(Math.random() * (player1dam - (player1dam / 2)) + (player1dam / 2));
        if(winnerCheck(round)){
            break
        }
    }
    if(winner == false){
        alert("It's a tie");

    }
}

fight();

