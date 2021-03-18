// this clears the svg that Sterling provides to us.
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

// all code above is pulled from exercise3.js

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