const ArrayUtils = require('../src/arrayUtils');

describe('ArrayUtils', () => {
  describe('removeDuplicates', () => {
    test('should remove duplicates from array', () => {
      expect(ArrayUtils.removeDuplicates([1, 2, 2, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
      expect(ArrayUtils.removeDuplicates(['a', 'b', 'a', 'c'])).toEqual(['a', 'b', 'c']);
    });

    test('should maintain order', () => {
      expect(ArrayUtils.removeDuplicates([3, 1, 2, 1, 3])).toEqual([3, 1, 2]);
    });

    test('should handle empty arrays', () => {
      expect(ArrayUtils.removeDuplicates([])).toEqual([]);
    });

    test('should throw error for non-arrays', () => {
      expect(() => ArrayUtils.removeDuplicates('not an array')).toThrow('Input must be an array');
    });
  });

  describe('findMax', () => {
    test('should find maximum value', () => {
      expect(ArrayUtils.findMax([1, 5, 3, 9, 2])).toBe(9);
      expect(ArrayUtils.findMax([-1, -5, -3, -2])).toBe(-1);
    });

    test('should handle arrays with mixed types', () => {
      expect(ArrayUtils.findMax([1, 'string', 5, null, 3])).toBe(5);
    });

    test('should throw error for empty arrays', () => {
      expect(() => ArrayUtils.findMax([])).toThrow('Array cannot be empty');
    });

    test('should throw error for arrays with no numeric values', () => {
      expect(() => ArrayUtils.findMax(['a', 'b', 'c'])).toThrow('Array must contain at least one numeric value');
    });

    test('should throw error for non-arrays', () => {
      expect(() => ArrayUtils.findMax('not an array')).toThrow('Input must be an array');
    });
  });

  describe('findMin', () => {
    test('should find minimum value', () => {
      expect(ArrayUtils.findMin([1, 5, 3, 9, 2])).toBe(1);
      expect(ArrayUtils.findMin([-1, -5, -3, -2])).toBe(-5);
    });

    test('should handle arrays with mixed types', () => {
      expect(ArrayUtils.findMin([5, 'string', 1, null, 3])).toBe(1);
    });

    test('should throw error for empty arrays', () => {
      expect(() => ArrayUtils.findMin([])).toThrow('Array cannot be empty');
    });
  });

  describe('average', () => {
    test('should calculate average correctly', () => {
      expect(ArrayUtils.average([1, 2, 3, 4, 5])).toBe(3);
      expect(ArrayUtils.average([10, 20, 30])).toBe(20);
    });

    test('should handle decimal results', () => {
      expect(ArrayUtils.average([1, 2, 4])).toBeCloseTo(2.333, 3);
    });

    test('should handle arrays with mixed types', () => {
      expect(ArrayUtils.average([1, 'string', 3, null, 5])).toBe(3);
    });

    test('should throw error for empty arrays', () => {
      expect(() => ArrayUtils.average([])).toThrow('Array cannot be empty');
    });

    test('should throw error for arrays with no numeric values', () => {
      expect(() => ArrayUtils.average(['a', 'b', 'c'])).toThrow('Array must contain at least one numeric value');
    });
  });

  describe('flatten', () => {
    test('should flatten nested arrays', () => {
      expect(ArrayUtils.flatten([1, [2, 3], [4, [5, 6]]])).toEqual([1, 2, 3, 4, 5, 6]);
      expect(ArrayUtils.flatten([[1, 2], [3, 4]])).toEqual([1, 2, 3, 4]);
    });

    test('should handle deeply nested arrays', () => {
      expect(ArrayUtils.flatten([1, [2, [3, [4, [5]]]]])).toEqual([1, 2, 3, 4, 5]);
    });

    test('should handle empty arrays', () => {
      expect(ArrayUtils.flatten([])).toEqual([]);
      expect(ArrayUtils.flatten([[], []])).toEqual([]);
    });

    test('should throw error for non-arrays', () => {
      expect(() => ArrayUtils.flatten('not an array')).toThrow('Input must be an array');
    });
  });

  describe('chunk', () => {
    test('should chunk array into specified sizes', () => {
      expect(ArrayUtils.chunk([1, 2, 3, 4, 5, 6], 2)).toEqual([[1, 2], [3, 4], [5, 6]]);
      expect(ArrayUtils.chunk([1, 2, 3, 4, 5], 3)).toEqual([[1, 2, 3], [4, 5]]);
    });

    test('should handle arrays smaller than chunk size', () => {
      expect(ArrayUtils.chunk([1, 2], 5)).toEqual([[1, 2]]);
    });

    test('should handle empty arrays', () => {
      expect(ArrayUtils.chunk([], 3)).toEqual([]);
    });

    test('should throw error for invalid chunk sizes', () => {
      expect(() => ArrayUtils.chunk([1, 2, 3], 0)).toThrow('Chunk size must be a positive integer');
      expect(() => ArrayUtils.chunk([1, 2, 3], -1)).toThrow('Chunk size must be a positive integer');
      expect(() => ArrayUtils.chunk([1, 2, 3], 2.5)).toThrow('Chunk size must be a positive integer');
    });

    test('should throw error for non-arrays', () => {
      expect(() => ArrayUtils.chunk('not an array', 2)).toThrow('Input must be an array');
    });
  });
});