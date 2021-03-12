/*
  ____  _   ___                _      _             ___             _   _               _           _  _   _       _    
 |__ / (_) / __|_  _ _ __ _ __| |_  _(_)_ _  __ _  | __|  _ _ _  __| |_(_)___ _ _  ___ | |_ ___    /_\| |_| |_ _ _( )___
  |_ \  _  \__ \ || | '_ \ '_ \ | || | | ' \/ _` | | _| || | ' \/ _|  _| / _ \ ' \(_-< |  _/ _ \  / _ \  _|  _| '_|/(_-<
 |___/ (_) |___/\_,_| .__/ .__/_|\_, |_|_||_\__, | |_| \_,_|_||_\__|\__|_\___/_||_/__/  \__\___/ /_/ \_\__|\__|_|   /__/
                    |_|  |_|     |__/       |___/                                                                                     
*/

// this clears the svg that Sterling provides to us.
// You may want to include this at the top of all of your files!
d3.selectAll("svg > *").remove();

// grabbing Shape from instance variables
const listOfShapes = Shape.atoms(true);

// declaring some constants for our rendering
const start = 0;    // the position of the first rect
const w = 50;       // the width of each rect
const margin = 10;  // the space between each rect
const RED = "#E54B4B";
const BLUE = "#0495c2";
const GREEN = "#19eb0e";

/**
 * a function to calculate the x coordinate of a given list item
 * @param {Object} listItem a member of listOfShapes, a Shape from the forge model
 */
function x(d, i) {
    // calculates and returns the x position based on the index and other constants
    return i * (w + margin) + start;
}

// renders a rect for each item in listOfShapes
// the x positions are calculated based on order in the list
d3.select(svg)
    .selectAll("myShape")   
    .data(listOfShapes)     
    .join("rect")           
    .attr("x", x)       // supplying our function called x here       
    .attr("y", 0)           
    .attr("width", w)   // using our width constant from above
    .attr("height", 50);


    
// THIS IS A SAMPLE SOLUTION: DELETE LATER
d3.select(svg)
    .selectAll("myCircle")
    .data(listOfShapes)
    .join("circle")
    .attr("cx", 50)
    .attr("cy", 50)
    .attr("r", (d, i) => {return (5 - i) * 10;})
    .style("fill", (d, i) => {
        const c = d.color._id;
        if (c === "Red0") {
            return RED;
        } else if (c === "Blue0") {
            return BLUE;
        } else {
            return GREEN;
        }
    });


