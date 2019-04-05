// Assign the data from `data.js` to a descriptive variable
var tableData = data;

console.log(tableData);

// Get a reference to the table body
var tbody = d3.select("tbody");

// Add all the data to the site so user can "scroll search" the data

// For each listing add a row to the table
tableData.forEach((listing) => {
  var row = tbody.append("tr");

  // for each key add table data
  Object.entries(listing).forEach(([key, value]) => {  
    var cell = row.append("td");
    cell.text(value);
  });
  
});