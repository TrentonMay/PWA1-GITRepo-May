



window.Person = Person;
var Person = {      //Declare person object
    jobs:["Pilot", "Soldier", "Farmer", "Fry Cook"],
    actions:["Sleeping", "Working", "Eating"]
};

function person(name, action, job, row){
    this.name = name;
    this.action = action;
    this.job = job;
    this.row = row;

}




