## Useeffect

- What is useEffect?
  - it is Hook (use...)
- When do you use it?
  - useEffect -> performs a `side effect`

```javascript
var number = 0;

// performs a side effect
// it changes the number variable
function countWithSideEffect() {
  number = number + 1;
}

countWithSideEffect(); // changes number to + 1

// no side effect
// it just returns a new value
function countWithoutSideEffect(countingNumber) {
  var newNumber = countingNumber + 1;
  return newNumber;
}

countWithoutSideEffect(3); // -> return 4
```

- Common sideEffects we want to perform

  - fetching data
  - console.logging
  - want to add an event listener to the entire screen

- How does it work?

  - We call useEffect and we pass it a callback function
  - This function is performed by useEffect
  - It can be performed once,
  - or multiple times -> dependency array (we will explain)

- How do we use a useEffect hook to fetch data
  1. X npm install axios (to fetch data)
  2. X first import the useEffect hook
  3. X we need to import useState, because our fetched data will be stored as a state (it is dynamic data)
  4. X use the useEffect hook
  5. X fetch data using axios
  6. X set the state using the useState hook (store the data)
  7. How display the data that we fetched
  8. catch and handle errors

Happy path -> test -> Unhappy path (error handling, catch)
