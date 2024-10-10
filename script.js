function CalculateOne(num1, num2, operator) {
    if (operator === '+') {
        return num1 + num2;
    } else if (operator === '-') {
        return num1 - num2;
    } else if (operator === '*') {
        return num1 * num2;
    } else if (operator === '/') {
        return num1 / num2;
    } else if (operator === '%') {
        return num1 % num2;
    } else {
        return 'Invalid operator';
    }
}


function Calculate2(arr) {
    let result = arr[0];
    for (let i = 1; i < arr.length; i += 2) {
        const operator = arr[i];
        const num = arr[i + 1];

        if (operator === '+') {
            result += num;
        } else if (operator === '-') {
            result -= num;
        } else if (operator === '*') {
            result *= num;
        } else if (operator === '/') {
            result /= num;
        } else if (operator === '%') {
            result %= num;
        } else {
            return 'Invalid operator in array';
        }
    }

    return result;
}


console.log(Calculate2([5, '+', 3, '*', 2]));

console.log(CalculateOne(10,  2 , '/'));
