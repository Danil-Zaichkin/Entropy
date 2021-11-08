let fs = require('fs');
let arg = process.argv;
let inputData;
let entropy = 0;
let alph = new Array();
let i = 0, n = 0;

inputData = fs.readFileSync('input.txt');
inputData = inputData.toString();

/* инициализация массива alph
   в результате ключами массива являются символы из строки */
for (i = 0; i < inputData.length; i++) {
    alph[inputData.charAt(i)] = 0;
}


for (i = 0; i < inputData.length; i++) {
    alph[inputData.charAt(i)]++;
}
/*
console.log(alph)

for (i = 0; i < alph.length; i++) { // длинна это массива равна нулю, т.к. индексы элементов буквенные (длинна определятся последним числовым индексом)

}
 */
for (i in alph) {
    alph[i] /= inputData.length
    n++
}
if (n == 1) {
    console.log(entropy)
} else {
    for (i in alph) {
        entropy -= alph[i] * (Math.log(alph[i]) / Math.log(n))
    }
    console.log(entropy)
}