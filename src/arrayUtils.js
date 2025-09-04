// Array utility functions with bug fixes
class ArrayUtils {
  /**
   * Remove duplicates from array
   * Bug Fix #17: Handle different data types and maintain order
   */
  static removeDuplicates (arr) {
    if (!Array.isArray(arr)) {
      throw new Error('Input must be an array');
    }

    // Fixed: Use Set to remove duplicates while maintaining order
    return [...new Set(arr)];
  }

  /**
   * Find maximum value in array
   * Bug Fix #18: Handle empty arrays and non-numeric values
   */
  static findMax (arr) {
    if (!Array.isArray(arr)) {
      throw new Error('Input must be an array');
    }

    if (arr.length === 0) {
      throw new Error('Array cannot be empty');
    }

    // Fixed: Filter numeric values and handle edge cases
    const numericValues = arr.filter(val => typeof val === 'number' && !isNaN(val));

    if (numericValues.length === 0) {
      throw new Error('Array must contain at least one numeric value');
    }

    return Math.max(...numericValues);
  }

  /**
   * Find minimum value in array
   * Bug Fix #19: Handle empty arrays and non-numeric values
   */
  static findMin (arr) {
    if (!Array.isArray(arr)) {
      throw new Error('Input must be an array');
    }

    if (arr.length === 0) {
      throw new Error('Array cannot be empty');
    }

    const numericValues = arr.filter(val => typeof val === 'number' && !isNaN(val));

    if (numericValues.length === 0) {
      throw new Error('Array must contain at least one numeric value');
    }

    return Math.min(...numericValues);
  }

  /**
   * Calculate average of array values
   * Bug Fix #20: Handle non-numeric values and prevent division by zero
   */
  static average (arr) {
    if (!Array.isArray(arr)) {
      throw new Error('Input must be an array');
    }

    if (arr.length === 0) {
      throw new Error('Array cannot be empty');
    }

    const numericValues = arr.filter(val => typeof val === 'number' && !isNaN(val));

    if (numericValues.length === 0) {
      throw new Error('Array must contain at least one numeric value');
    }

    const sum = numericValues.reduce((acc, val) => acc + val, 0);
    return sum / numericValues.length;
  }

  /**
   * Flatten nested arrays
   * Bug Fix #21: Handle deeply nested arrays properly
   */
  static flatten (arr) {
    if (!Array.isArray(arr)) {
      throw new Error('Input must be an array');
    }

    // Fixed: Use flat(Infinity) to handle arbitrary nesting levels
    return arr.flat(Infinity);
  }

  /**
   * Chunk array into smaller arrays
   * Bug Fix #22: Handle edge cases and validate chunk size
   */
  static chunk (arr, size) {
    if (!Array.isArray(arr)) {
      throw new Error('Input must be an array');
    }

    if (!Number.isInteger(size) || size <= 0) {
      throw new Error('Chunk size must be a positive integer');
    }

    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }

    return result;
  }
}

module.exports = ArrayUtils;
