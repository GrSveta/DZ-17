const x = prompt("Enter a number"); 

function* factorial(x) {
  const bi = BigInt(x)
  let endfact = 1n;
  for (i=1n; i <= bi; i++) {
    endfact *=i;
  }
  yield endfact;
}

alert(...factorial(x))