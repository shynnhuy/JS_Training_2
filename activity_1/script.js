var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var scoreRef = document.getElementById("score");
var id = 1;

function okFunc() {
  if (!firstName.value || !lastName.value || !scoreRef.value) {
    alert("All field are required!");
  }
  var tableRef = document
    .getElementById("table")
    .getElementsByTagName("tbody")[0];
  var fullName = firstName.value + " " + lastName.value;
  var score = parseInt(scoreRef.value);
  var result = "Pass";
  var mention = "Fair";
  if (score >= 0 && score < 50) {
    result = "Not Pass";
    mention = "Bad";
  } else if (score >= 50 && score < 80) {
    result = "Pass";
    mention = "Fair";
  } else if (score >= 80 && score < 90) {
    result = "Pass";
    mention = "Good";
  } else if (score >= 90 && score <= 100) {
    result = "Pass";
    mention = "Very Good";
  } else {
    alert("Score must be between 0 - 100!");
    return;
  }

  var row = "<tr>";
  row += "<td>" + id + "</td>";
  row += "<td>" + fullName + "</td>";
  row += "<td>" + score + "</td>";
  row += "<td>" + result + "</td>";
  row += "<td>" + mention + "</td>";
  row += "</tr>";

  tableRef.insertRow().innerHTML = row;
  id++;
}

function clearFunc() {
  firstName.value = "";
  lastName.value = "";
  scoreRef.value = "";
}