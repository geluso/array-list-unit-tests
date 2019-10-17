# Array Lists and Unit Tests
This lab is to test your knowledge of Array Lists and give you a chance to
write your own unit tests.

## File Structure
Generally you should complete this lab by implementing your own ArrayList from
scratch, and writing unit tests for it. Of all the files you will only really
edit `YourArrayList.js` and `YourArrayYourTests.test.js`.

There are two files for ArrayLists, one that contains a minified solution, and
one file that you should edit and build yourself.

* **SolutionArrayList.js**
* **YourArrayList.js**

There are three test files.

**SolutionArraySolutionTests.test.js** uses the solution ArrayList and
totally built out tests. This file is here just to show that it's possible
to build the array list and proper tests and have them all pass.

**YourArraySolutionTests.test.js** uses your array implementation and runs
it against the solution tests.

**YourArrayYourTests.test.js** This file has all the unit tests defined, but
they are all empty code blocks. You should write code to implement each test.
It runs it against your ArrayList implementation.

## Install Jest
You'll need to install the `jest`.

```
npm install -g jest
```

## Run Jest
Now make sure you're in this directory and run `jest
SolutionArraySolutionTests.test.js` to run the test file using the complete
solution. Verify that you see the list of unit tests and all green check boxes.

Pass the name of a test file to run it.

* `jest SolutionArraySolutionTests.test.js`
* `jest YourArraySolutionTests.test.js`
* `jest YourArrayYourTests.test.js`

Jest has a command line flag `--watch` where it will stay open and watch
your file for changes. Whenever it detects your file has changed it will
automatically rerun all the tests.

## That's It!
```
jest --watch YourArraySolutionTests.test.js
```

Start programming! Build up the ArrayList first using the provided solution
tests. Once you've built your ArrayList you can work writing your own unit
tests.
