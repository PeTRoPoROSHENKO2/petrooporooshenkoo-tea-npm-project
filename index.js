// Helper function to convert an object to query parameters
function toQueryString(params) {
    return Object.keys(params)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
        .join('&');
}

// Helper function to deep clone an object (useful for nested structures)
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

// Helper function to shuffle an array
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Helper function to format a number as currency
function formatCurrency(num, currency = 'USD') {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
    }).format(num);
}

// Helper function to get a random item from an array
function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

// Example usage
const params = { name: "John Doe", age: 30, city: "New York" };
console.log("Query String:", toQueryString(params));             // "name=John%20Doe&age=30&city=New%20York"

const originalObj = { a: 1, b: { c: 2 } };
const clonedObj = deepClone(originalObj);
console.log("Cloned Object:", clonedObj);                        // { a: 1, b: { c: 2 } }

const arr = [1, 2, 3, 4, 5];
console.log("Shuffled Array:", shuffleArray(arr.slice()));       // e.g., [3, 1, 5, 2, 4]

console.log("Formatted Currency:", formatCurrency(1234.5, 'EUR')); // "€1,234.50"

const items = ['apple', 'banana', 'cherry', 'date'];
console.log("Random Item:", getRandomItem(items));               // e.g., "banana"