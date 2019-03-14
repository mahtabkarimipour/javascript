// from data.js
var tableData = data;
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(data);
// YOUR CODE HERE!
data.forEach(sightings => {
  var row = tbody.append("tr");
  Object.entries(sightings).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

function buttonClicked() {
  var txt = document.getElementById("datetime").value;
  if (txt === "") {
    alert("Enter a date please.");
    return;
  }
  if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(txt)) {
    alert("Wrong Format: dd/mm/yyyy");
    return;
  }
  cleartable();
  var found = false;
  data.forEach(sightings => {
    if (sightings.datetime === txt) {
      found = true;
      var row = tbody.append("tr");
      Object.entries(sightings).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    }
  });
  if (!found) {
    alert("No match case found");
  }
}

function cleartable() {
  var table = document.getElementById("ufo-table");
  //or use :  var table = document.all.tableid;
  for (var i = table.rows.length - 1; i > 0; i--) {
    table.deleteRow(i);
  }
}