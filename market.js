//imports your code to be tested
const Stock = require("./stock.js");
const Portfolio = require("./portfolio.js");

//Imports my code to run your examples against the economic forcast
//const Forecast = require("./forcast");

function main(){

    //create all of your stocks
    let s1 = new Stock("Snap Inc", "SNAP","NYSE", 12.37,808);
    let s2 = new Stock("SuperValue Inc","SVU","NYSE", 15.60,641);
    let s3 = new Stock("Motorola Solutions Inc","MSI","NYSE",91.90, 108);
    let s4 = new Stock("Tesla Inc", "TSLA", "NASDAQ",298.98,33);
    let s5 = new Stock("Comstock Mining Inc", "LODE", "NYSE", .12, 83333)

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
