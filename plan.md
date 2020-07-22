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

* How do we use a useEffect hook to fetch data
* How display the data that we fetched
