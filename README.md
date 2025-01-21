# Incorrect return value when input is null

This JavaScript code snippet demonstrates a common error in handling null values. The function `foo` intends to add two numbers, but it incorrectly returns `null` when either input is `null`.  This commit fixes the issue by returning 0 when a null value is encountered. 

## Bug Report
The original `foo` function returns `null` if either `a` or `b` is `null`. This is likely not the intended behavior, as it can lead to unexpected results and errors in other parts of the program. 

## Solution
The corrected function now explicitly returns 0 if either input is `null`, providing a more robust and predictable behavior.  This ensures that the function always returns a valid numeric value.