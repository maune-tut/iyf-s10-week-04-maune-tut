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
// --- Task 7.4: Control Flow ---

// 1. If/Else Grade System
function getGrade(score) {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
}

// 2. FizzBuzz Challenge (1 to 100)
console.log("--- FizzBuzz Challenge ---");
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// --- Mini-Project: Interactive Calculator ---

function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { 
    if (b === 0) return "Error: Cannot divide by zero";
    return a / b; 
}

function calculate(num1, operator, num2) {
    switch (operator) {
        case "+": return add(num1, num2);
        case "-": return subtract(num1, num2);
        case "*": return multiply(num1, num2);
        case "/": return divide(num1, num2);
        case "%": return num1 % num2;
        case "**": return num1 ** num2;
        default: return "Invalid operator";
    }
}

// Test the Calculator in the console
console.log("--- Calculator Tests ---");
console.log("10 + 5 =", calculate(10, "+", 5));
console.log("10 / 0 =", calculate(10, "/", 0));
console.log("2 to the power of 3 =", calculate(2, "**", 3));
// --- PART 2: STUDENT GRADE TRACKER ---

// 1. Data Array
const students = [
    { name: "Riki", score: 95 },
    { name: "Jake", score: 82 },
    { name: "Ayumi", score: 65 },
    { name: "Patience", score: 74 },
    { name: "Essie", score: 58 }
];

// 2. Function to assign Letter Grades
function getLetterGrade(score) {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
}

// 3. Calculate Class Average using .reduce()
function calculateClassAverage(studentArray) {
    const totalPoints = studentArray.reduce((sum, student) => sum + student.score, 0);
    return (totalPoints / studentArray.length).toFixed(2);
}

// 4. Filter Struggling Students (Score < 70)
const strugglingStudents = students.filter(student => student.score < 70);

// --- DISPLAY RESULTS ---
console.log("--- IYF GRADE REPORT ---");
console.log("Class Average Score:", calculateClassAverage(students));
console.log("Detailed Student Grades:");
students.forEach(s => {
    console.log(`${s.name}: ${s.score} (${getLetterGrade(s.score)})`);
});
console.log("Struggling Students:", strugglingStudents.map(s => s.name).join(", "));
