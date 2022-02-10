const x = prompt("Enter a number"); 

function* factorial(x) {
  let endfact = 1;
  for (i=1; i <= x; i++) {
    endfact *=i;
  }
  yield endfact;
}

alert(...factorial(x))