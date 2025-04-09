const { sum, average, max, min } = require('./sum');

describe('sum function', () => {
    test('adds numbers correctly', () => {
        expect(sum([1, 2, 3])).toBe(6);
        expect(sum([-1, 1])).toBe(0);
        expect(sum([0, 0, 0])).toBe(0);
    });

    test('handles empty array', () => {
        expect(sum([])).toBe(0);
    });

    test('throws error for non-array input', () => {
        expect(() => sum('not an array')).toThrow('Input must be an array');
        expect(() => sum(123)).toThrow('Input must be an array');
    });
});

describe('average function', () => {
    test('calculates average correctly', () => {
        expect(average([1, 2, 3])).toBe(2);
        expect(average([-1, 0, 1])).toBe(0);
    });

    test('throws error for empty array', () => {
        expect(() => average([])).toThrow('Input must be a non-empty array');
    });

    test('throws error for non-array input', () => {
        expect(() => average('not an array')).toThrow('Input must be a non-empty array');
    });
});

describe('max function', () => {
    test('finds maximum value correctly', () => {
        expect(max([1, 2, 3])).toBe(3);
        expect(max([-1, -2, -3])).toBe(-1);
    });

    test('throws error for empty array', () => {
        expect(() => max([])).toThrow('Input must be a non-empty array');
    });
});

describe('min function', () => {
    test('finds minimum value correctly', () => {
        expect(min([1, 2, 3])).toBe(1);
        expect(min([-1, -2, -3])).toBe(-3);
    });

    test('throws error for empty array', () => {
        expect(() => min([])).toThrow('Input must be a non-empty array');
    });
}); 