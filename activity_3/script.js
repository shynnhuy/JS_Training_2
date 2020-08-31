

function calculate(operand) {
  var numA = parseInt(document.getElementById("num_one").value);
  var numB = parseInt(document.getElementById("num_two").value);
  var resultInp = document.getElementById("result");
  var operandTxt = document.getElementById("operand");
  if (isNaN(numA) || isNaN(numB)) {
    alert("A & B must be a Number!");
    return;
  }

  var result;

  switch(operand) {
    case "add": {
      result = numA + numB;
      operandTxt.innerHTML = "+";
      break;
    }
    case "minus": {
      result = numA - numB;
      operandTxt.innerHTML = "-";
      break;
    }
    case "multiply": {
      result = numA * numB;
      operandTxt.innerHTML = "*";
      break;
    }
    case "divide": {
      result = numA / numB;
      operandTxt.innerHTML = "/";
      break;
    }
    default: {
      return;
    }
  }
  resultInp.value = result;

}