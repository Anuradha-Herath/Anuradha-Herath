// Calculator utility with various bug fixes implemented
class Calculator {
  /**
   * Add two numbers
   * Bug Fix #1: Added input validation to prevent NaN results
   * Bug Fix #2: Added type checking to ensure numeric inputs
   */
  add (a, b) {
    // Fixed: Added input validation
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Both arguments must be numbers');
    }

    // Fixed: Added NaN check
    if (isNaN(a) || isNaN(b)) {
      throw new Error('Arguments cannot be NaN');
    }

    return a + b;
  }

  /**
   * Subtract two numbers
   * Bug Fix #3: Fixed order of operations
   */
  subtract (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Both arguments must be numbers');
    }

    if (isNaN(a) || isNaN(b)) {
      throw new Error('Arguments cannot be NaN');
    }

    return a - b; // Fixed: Was previously b - a
  }

  /**
   * Multiply two numbers
   * Bug Fix #4: Added handling for infinity
   */
  multiply (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Both arguments must be numbers');
    }

    if (isNaN(a) || isNaN(b)) {
      throw new Error('Arguments cannot be NaN');
    }

    const result = a * b;

    // Fixed: Added infinity check
    if (!isFinite(result)) {
      throw new Error('Result exceeds numeric limits');
    }

    return result;
  }

  /**
   * Divide two numbers
   * Bug Fix #5: Added division by zero protection
   * Bug Fix #6: Added floating point precision handling
   */
  divide (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Both arguments must be numbers');
    }

    if (isNaN(a) || isNaN(b)) {
      throw new Error('Arguments cannot be NaN');
    }

    // Fixed: Added division by zero check
    if (b === 0) {
      throw new Error('Division by zero is not allowed');
    }

    const result = a / b;

    // Fixed: Round to avoid floating point precision issues
    return Math.round(result * 1000000000000) / 1000000000000;
  }

  /**
   * Calculate percentage
   * Bug Fix #7: Fixed percentage calculation logic
   */
  percentage (value, percent) {
    if (typeof value !== 'number' || typeof percent !== 'number') {
      throw new Error('Both arguments must be numbers');
    }

    if (isNaN(value) || isNaN(percent)) {
      throw new Error('Arguments cannot be NaN');
    }

    // Fixed: Correct percentage calculation (was value * percent)
    return (value * percent) / 100;
  }

  /**
   * Calculate power
   * Bug Fix #8: Added handling for negative exponents and edge cases
   */
  power (base, exponent) {
    if (typeof base !== 'number' || typeof exponent !== 'number') {
      throw new Error('Both arguments must be numbers');
    }

    if (isNaN(base) || isNaN(exponent)) {
      throw new Error('Arguments cannot be NaN');
    }

    // Fixed: Added edge case handling
    if (base === 0 && exponent < 0) {
      throw new Error('Cannot raise zero to a negative power');
    }

    const result = Math.pow(base, exponent);

    if (!isFinite(result)) {
      throw new Error('Result exceeds numeric limits');
    }

    return result;
  }
}

module.exports = Calculator;
