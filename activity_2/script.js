var pName = document.getElementById("pname");
var pQuantity = document.getElementById("quantity");
var pPrice = document.getElementById("price");
var id = 1;
var total = 0

function addFunc() {
  if (!pName.value || !pQuantity.value || !pPrice.value) {
    alert("All field are required!");
    return;
  }
  var tableRef = document
    .getElementById("table")
    .getElementsByTagName("tbody")[0];
  var price = parseInt(pPrice.value);
  var quantity = parseInt(pQuantity.value);
  var subTotal = price * quantity;
  total += subTotal;

  var row = "<tr>";
  row += "<td>" + id + "</td>";
  row += "<td>" + pName.value + "</td>";
  row += "<td>" + quantity + "</td>";
  row += "<td>" + price + "</td>";
  row += "<td>" + subTotal + "$</td>";
  row += "</tr>";

  tableRef.insertRow().innerHTML = row;
  id++;
  document.getElementById("total").innerHTML = total + "$"
}

function clearFunc() {
  pName.value = "";
  pQuantity.value = "";
  pPrice.value = "";
}