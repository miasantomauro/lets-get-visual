/*
  ___   _   _   _    _                            ___                   ___       _        
 |_  ) (_) | | | |__(_)_ _  __ _   ___ _  _ _ _  | __|__ _ _ __ _ ___  |   \ __ _| |_ __ _ 
  / /   _  | |_| (_-< | ' \/ _` | / _ \ || | '_| | _/ _ \ '_/ _` / -_) | |) / _` |  _/ _` |
 /___| (_)  \___//__/_|_||_\__, | \___/\_,_|_|   |_|\___/_| \__, \___| |___/\__,_|\__\__,_|
                           |___/                            |___/                                                                                                          
*/

// clearing the svg that Sterling provides to us.
d3.select(svg).selectAll("*").remove();

// grabbing Shape from instance variables
const listOfShapes = Shape.atoms(true);
// Supplying "true" to atoms will include any atoms of signatures that extend Shape.

// the following code selects the svg, 
// then selects all of the (to be created) elements called "myShape",
// then appends a rect to the svg for each item in listOfShapes, 
// then specifies the attr's and style's for these rect's
d3.select(svg)
    .selectAll("myShape")   // this is a little weird! We are selecting something as we are creating it!
    .data(listOfShapes)     // specifies what we are using for our data
    .join("rect")           // this appends a rect for each item in our data specified in the line above
    .attr("x", 0)           // we've seen the rest in exercise 1...
    .attr("y", 0)           // But this time around, these attr's and styles's are applied to all of the rect's called myShape
    .attr("width", 50)
    .attr("height", 50);

// TODO: grab and print the colors from the model
