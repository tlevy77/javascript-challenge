// from data.js
var tableData = data;

// YOUR CODE HERE!

var $tbody = d3.select("tbody");

tableData.forEach(function(based) {
    var row = $tbody.append("tr");
    Object.entries(based).forEach(function([key,value]) {
        console.log(key,value)
        var cell = row.append("td");
        cell.text(value);
    });
 });

var button = d3.select("#filter-btn");
button.on("click", function() {
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    var filteredData = tableData.filter(sight => (sight.datetime === inputValue) || (sight.city === inputValue) || (sight.state === inputValue) || (sight.country === inputValue) || (sight.shape === inputValue));
    console.log(inputValue);
    console.log(tableData);
    $tbody.html("")
    
    if(filteredData.length !== 0) {
    filteredData.forEach(function(based) {
        var row = $tbody.append("tr");
        Object.entries(based).forEach(function([key,value]) {
            console.log(key,value)
            var cell = row.append("td");
            cell.text(value);
        })
     })
    }

    else {
        var p = $tbody.append("p");
        p.text("There are no UFO sightings for this date! Try a different date instead!");
    }
})