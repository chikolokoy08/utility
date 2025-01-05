# Utility Library

A JavaScript utility library with reusable functions to simplify common programming tasks. This library is designed for developers to quickly integrate commonly used utility methods into their projects.

## Features

This library includes:

1. **Date Formatting**: Format dates to a specified format (e.g., `YYYY-MM-DD`).
```javascript
console.log(Utils.formatDate(new Date(), 'YYYY-MM-DD')); // Outputs: 2025-01-05
```
2. **Debounce Function**: Prevents a function from being called too frequently.
```javascript
const log = Utils.debounce(() => console.log('Debounced!'), 500);
log(); // Call as needed
```
3. **Deep Clone Object**: Creates a deep copy of an object.
```javascript
const obj = { a: 1, b: { c: 2 } };
const clone = Utils.deepClone(obj);
console.log(clone); // Outputs: { a: 1, b: { c: 2 } }
```
4. **Generate Unique ID**: Creates unique identifiers with optional prefixes.
```javascript
console.log(Utils.generateUID('user')); // Outputs: user-abc123xyz
```
5. **Array Chunking**: Splits an array into smaller arrays of a specified size.
```javascript
const arr = [1, 2, 3, 4, 5];
console.log(Utils.chunkArray(arr, 2)); // Outputs: [[1, 2], [3, 4], [5]]
```
6. **Throttle Function**: Ensures a function is executed at most once in a specified period.
```javascript
const throttled = Utils.throttle(() => console.log('Throttled!'), 1000);
throttled();
```
7. **Capitalize Words**: Capitalizes the first letter of each word in a string.
```javascript
console.log(Utils.capitalizeWords('hello world')); // Outputs: Hello World
```
8. **Fibonacci Sequence Generator**: Generates a Fibonacci sequence up to a specified length.
```javascript
console.log(Utils.generateFibonacci(5)); // Outputs: [0, 1, 1, 2, 3]
```
9. **Flatten Nested Arrays**: Flattens deeply nested arrays into a single-level array.
```javascript
const nestedArray = [1, [2, [3, [4]]]];
console.log(Utils.flattenArray(nestedArray)); // Outputs: [1, 2, 3, 4]
```
10. **Validate Email**: Checks if a string is a valid email address.
```javascript
console.log(Utils.validateEmail('example@mail.com')); // Outputs: true
console.log(Utils.validateEmail('invalid-email'));    // Outputs: false
```

## Installation

### Step 1: Clone the Repository
Download the code from the repository:

```bash
git clone [https://github.com/your-username/utility-library.git](https://github.com/chikolokoy08/utility.git)
```
### Step 2: Install Dependencies
Navigate to the project folder and install dependencies if necessary. This is useful if the library is extended in the future.

```bash
npm install
```

### Step 3: Import the Library
Include the library in your project using require (for Node.js) or import (for modern JavaScript frameworks):

**Using require (Node.js)
```javascript
const Utils = require('./path-to-utility-library/index');
```

**Using import (ES Modules)
```javascript
import Utils from './path-to-utility-library/index.js';
```

