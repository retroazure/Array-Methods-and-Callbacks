import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

function getIndex(data, year, stage){

    for(let i = 0; i < data.length; i++){
        if(data[i].Year === year && data[i].Stage === stage){
            return i;
        }
    }
}

function getWinner2014(){
    let winner = 0;
    let home = fifaData[828]["Home Team Goals"];
    let away = fifaData[828]["Away Team Goals"];

    if(home > away){
        winner = fifaData[828]["Home Team Name"];
    }
    else if(away > home){
        winner = fifaData[828]["Away Team Name"];
    }
    else{
        winner = null;
    }

    return winner;
}

console.log(getIndex(fifaData, 2014, "Final"));

console.log(fifaData[828]["Home Team Name"]);

console.log(fifaData[828]["Away Team Name"]);

console.log(fifaData[828]["Home Team Goals"]);

console.log(fifaData[828]["Away Team Goals"]);

console.log(getWinner2014());


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    let finalData = data.filter((item) => item.Stage === "Final");

    return finalData;
};

console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callback) {

    let years = [];

    let last = callback;

    last.forEach((item)=> years.push(item.Year));
    
    return years;
}

console.log(getYears(getFinals(fifaData)));


/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(callback) {

     let winners = [];

     callback.forEach((item)=>{
         if(item["Home Team Goals"] > item["Away Team Goals"]){
             winners.push(item["Home Team Name"])
         }
         else if(item["Home Team Goals"] < item["Away Team Goals"]){
             winners.push(item["Away Team Name"]);
         }
         else{
             winners.push(item["Win conditions"].split(" ")[0]);
         }
     });

     return winners;

};

console.log(getWinners(getFinals(fifaData)));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(years_callback, winners_callback) {
    for(let i = 0; i<years_callback.length; i++){
           let string =`In ${years_callback[i]}, ${winners_callback[i]} won the world cup!`;
            console.log(string);
        }
    }
 
getWinnersByYear(getYears(getFinals(fifaData)),getWinners(getFinals(fifaData)));

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {

    let avgHome = data.reduce((total, item, index) => total + data[index]["Home Team Goals"] / data.length, 0);
    let avgAway = data.reduce((total, item, index) => total + data[index]["Away Team Goals"] / data.length, 0);

    return "Average Home Goals: " + avgHome + " Average Away Goals: " + avgAway;
};

console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, teamIni) {
    
    let gamesIndex = data.filter((item)=>{
        if(item["Home Team Initials"] === teamIni || item["Away Team Initials"] === teamIni){
            return item;
        }
    });
    
    let winCount = gamesIndex.reduce((total, item) => {
        if(item["Home Team Goals"] > item["Away Team Goals"] && item["Home Team Initials"] === teamIni){
            return total + 1;
        }
        else if(item["Home Team Goals"] < item["Away Team Goals"] && item["Away Team Initials"] === teamIni){
            return total + 1;
        }
        
        return total;
    },0);

    return winCount;

};

console.log(getCountryWins(fifaData, 'JPN'));


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
