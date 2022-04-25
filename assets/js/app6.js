let aleg = +prompt("Катет а:"); 

console.log(`Катет а: ${aleg}`);

let bleg = +prompt("Катет в:"); 

console.log(`Катет в: ${bleg}`);

let summ = aleg** 2 + bleg ** 2;

console.log(`Сума квадратів катетів: ${summ}`); 

let hypotenuse = Math.sqrt(summ);

console.log(`Гіпотинуза: ${hypotenuse}`);