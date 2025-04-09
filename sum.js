function sum(numbers) {
    if (!Array.isArray(numbers)) {
        throw new Error('Input must be an array');
    }
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

function average(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        throw new Error('Input must be a non-empty array');
    }
    return sum(numbers) / numbers.length;
}

function max(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        throw new Error('Input must be a non-empty array');
    }
    return Math.max(...numbers);
}

function min(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        throw new Error('Input must be a non-empty array');
    }
    return Math.min(...numbers);
}

module.exports = {
    sum,
    average,
    max,
    min
}; 