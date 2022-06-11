let a = +prompt("Введіть значення a:").replaceAll(" ", "");
   
while (isNaN(a) || a < 1) {
    a = +prompt("Ви ввели неправильне значення а, спробуйте ще раз");
}

let b = +prompt(`Введіть значення b, яке має бути більшим за значення ${a}`).replaceAll(" ", "");

while (isNaN(b) || a >= b) {
    b = +prompt("Ви ввели неправильне значення b, спробуйте ще раз");
}

let h = +prompt(`Введіть крок, який менше ${b - a}`).replaceAll(" ", "");

while (isNaN(h) || h > (b - a)) {
    h = +prompt("Ви ввели неправильне значення h, спробуйте ще раз");
}

let sum = 0;

for (; a <= b; a += h) {
    factorial = 1;
    console.log(`Факторіал числа ${a}`);

    for (i = 2; i <= a; i++) {
        factorial *= i;
    }

    console.log(`Рівно ${factorial}`)
    sum += factorial;
};

console.log(`Сума усіх факторіалів дорівнює ${sum}`);
