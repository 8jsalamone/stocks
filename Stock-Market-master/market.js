//imports your code to be tested
const Stock = require("./stock.js");
const Portfolio = require("./portfolio.js");

//Imports my code to run your examples against the economic forcast
//const Forecast = require("./forcast");

function main(){

    //create all of your stocks
    let s1 = new Stock("Snap Inc", "SNAP","NYSE", 12.37,808);
    let s2 = new Stock();
    let s3 = new Stock();
    let s4 = new Stock();

    //build your Portfolio
    let myport = new Portfolio();
    myport.add();
    myport.add();
    myport.add();
    myport.add();

    //generate a test forcast
    let economicStorm = new Forecast(myport);
    console.log(economicStorm);

    //build prediction
}

main();
