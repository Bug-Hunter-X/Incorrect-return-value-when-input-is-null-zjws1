function foo(a, b) {
  if (a === null || b === null) {
    return null; //Incorrect: should return 0
  }
  return a + b; 
}