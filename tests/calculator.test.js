const Calculator = require('../src/calculator');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add', () => {
    test('should add two positive numbers correctly', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test('should add negative numbers correctly', () => {
      expect(calculator.add(-2, -3)).toBe(-5);
    });

    test('should throw error for non-numeric inputs', () => {
      expect(() => calculator.add('2', 3)).toThrow('Both arguments must be numbers');
      expect(() => calculator.add(2, '3')).toThrow('Both arguments must be numbers');
    });

    test('should throw error for NaN inputs', () => {
      expect(() => calculator.add(NaN, 3)).toThrow('Arguments cannot be NaN');
      expect(() => calculator.add(2, NaN)).toThrow('Arguments cannot be NaN');
    });
  });

  describe('subtract', () => {
    test('should subtract two numbers correctly', () => {
      expect(calculator.subtract(5, 3)).toBe(2);
      expect(calculator.subtract(3, 5)).toBe(-2);
    });

    test('should throw error for non-numeric inputs', () => {
      expect(() => calculator.subtract('5', 3)).toThrow('Both arguments must be numbers');
    });
  });

  describe('multiply', () => {
    test('should multiply two numbers correctly', () => {
      expect(calculator.multiply(4, 5)).toBe(20);
      expect(calculator.multiply(-2, 3)).toBe(-6);
    });

    test('should throw error for results exceeding numeric limits', () => {
      expect(() => calculator.multiply(Number.MAX_VALUE, 2)).toThrow('Result exceeds numeric limits');
    });
  });

  describe('divide', () => {
    test('should divide two numbers correctly', () => {
      expect(calculator.divide(10, 2)).toBe(5);
      expect(calculator.divide(7, 3)).toBeCloseTo(2.333333333333);
    });

    test('should throw error for division by zero', () => {
      expect(() => calculator.divide(5, 0)).toThrow('Division by zero is not allowed');
    });

    test('should handle floating point precision', () => {
      expect(calculator.divide(1, 3)).toBe(0.333333333333);
    });
  });

  describe('percentage', () => {
    test('should calculate percentage correctly', () => {
      expect(calculator.percentage(100, 50)).toBe(50);
      expect(calculator.percentage(200, 25)).toBe(50);
    });

    test('should handle decimal percentages', () => {
      expect(calculator.percentage(100, 12.5)).toBe(12.5);
    });
  });

  describe('power', () => {
    test('should calculate power correctly', () => {
      expect(calculator.power(2, 3)).toBe(8);
      expect(calculator.power(5, 0)).toBe(1);
    });

    test('should throw error for zero to negative power', () => {
      expect(() => calculator.power(0, -1)).toThrow('Cannot raise zero to a negative power');
    });

    test('should handle negative exponents', () => {
      expect(calculator.power(2, -2)).toBe(0.25);
    });
  });
});