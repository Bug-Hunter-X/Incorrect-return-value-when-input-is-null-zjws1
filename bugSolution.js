function foo(a, b) {
  if (a === null || b === null) {
    return 0; //Corrected: returns 0 if either a or b is null
  }
  return a + b; 
}