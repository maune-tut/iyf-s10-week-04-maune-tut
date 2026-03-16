// --- Task 7.1: Variables ---
let myName = "Maune"; 
let myAge = 19; 
let isStudent = true;
let favoriteColors = ["Purple", "Black", "White"];
let today = new Date();

console.log("Name:", myName);
console.log("Age:", myAge);
console.log("Is Student:", isStudent);
console.log("Fav Colors:", favoriteColors);
console.log("Date:", today);

// --- Task 7.2: Math Challenge ---
let ageInDays = myAge * 365;
let ageInHours = ageInDays * 24;
let yearTurn100 = 2026 + (100 - myAge);

console.log(`I am ~${ageInDays} days old.`);
console.log(`I'll turn 100 in ${yearTurn100}.`);
// --- Task 7.3: Functions ---

// 1. Calculate Area
const calculateArea = (width, height) => width * height;

// 2. Celsius to Fahrenheit
const celsiusToFahrenheit = (celsius) => (celsius * 9/5) + 32;

// 3. Check if Even
const isEven = (num) => num % 2 === 0;

// 4. Get Initials (e.g., "Maune Tut" -> "MT")
function getInitials(fullName) {
    const names = fullName.split(" ");
    return names.map(n => n[0]).join("").toUpperCase();
}

// 5. The Tip Calculator Challenge
function calculateTip(bill, tipPercent = 15) {
    return bill * (tipPercent / 100);
}

// Testing Task 7.3
console.log("--- Function Tests ---");
console.log("Area (5x10):", calculateArea(5, 10));
console.log("25°C in F:", celsiusToFahrenheit(25));
console.log("Is 10 even?:", isEven(10));
console.log("Initials of Maune Tut:", getInitials("Maune Tut"));
console.log("Tip for $80 (15%):", calculateTip(80));