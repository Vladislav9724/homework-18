let a = +prompt("Число а:"); 


console.log(`Число а: ${a}`);

let numerator = a **2 + 10;

console.log(`Чиисельник: ${numerator}`);

let denominator = a **2 + 1;

console.log(`Знаменик: ${denominator}`);

let sqrtDenominator = Math.sqrt(denominator)

console.log(`Корінь квадратний знаменика: ${sqrtDenominator}`); 

let y = numerator / sqrtDenominator

console.log(`y = ${y}`)