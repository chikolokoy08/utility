// Utility Library: A collection of useful functions for developers

const UtilityLibrary = {
  // 1. Format Date
  formatDate: (date, format = "YYYY-MM-DD") => {
    const d = new Date(date);
    const map = {
      YYYY: d.getFullYear(),
      MM: String(d.getMonth() + 1).padStart(2, '0'),
      DD: String(d.getDate()).padStart(2, '0'),
      hh: String(d.getHours()).padStart(2, '0'),
      mm: String(d.getMinutes()).padStart(2, '0'),
      ss: String(d.getSeconds()).padStart(2, '0'),
    };
    return format.replace(/YYYY|MM|DD|hh|mm|ss/g, (key) => map[key]);
  },

  // 2. Debounce Function
  debounce: (func, delay) => {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), delay);
    };
  },

  // 3. Deep Clone Object
  deepClone: (obj) => {
    return JSON.parse(JSON.stringify(obj));
  },

  // 4. Generate Unique ID
  generateUID: (prefix = "id") => {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
  },

  // 5. Array Chunking
  chunkArray: (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  },

  // 6. Throttle Function
  throttle: (func, limit) => {
    let inThrottle;
    return function (...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  },

  // 7. Capitalize Words
  capitalizeWords: (str) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  },

  // 8. Fibonacci Sequence Generator
  generateFibonacci: (n) => {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
  },

  // 9. Flatten Nested Arrays
  flattenArray: (array) => {
    return array.reduce(
      (acc, val) => acc.concat(Array.isArray(val) ? UtilityLibrary.flattenArray(val) : val),
      []
    );
  },

  // 10. Validate Email
  validateEmail: (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  },
};

module.exports = UtilityLibrary;
