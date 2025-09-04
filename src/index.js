const Calculator = require('./calculator');
const StringUtils = require('./stringUtils');
const ArrayUtils = require('./arrayUtils');

/**
 * Main application demonstrating enhanced bug fixes
 * This module exports utility classes with comprehensive bug fixes
 */

// Export all utilities
module.exports = {
  Calculator,
  StringUtils,
  ArrayUtils
};

// If run directly, demonstrate the utilities
if (require.main === module) {
  console.log('=== Enhanced Bug Fixes Demo ===\n');

  try {
    // Calculator demo
    console.log('Calculator Examples:');
    const calc = new Calculator();
    console.log('✓ 10 + 5 =', calc.add(10, 5));
    console.log('✓ 10 - 3 =', calc.subtract(10, 3));
    console.log('✓ 4 * 6 =', calc.multiply(4, 6));
    console.log('✓ 15 / 3 =', calc.divide(15, 3));
    console.log('✓ 50% of 200 =', calc.percentage(200, 50));
    console.log('✓ 2^8 =', calc.power(2, 8));

    // String utils demo
    console.log('\nString Utils Examples:');
    console.log('✓ Email validation (test@example.com):', StringUtils.isValidEmail('test@example.com'));
    console.log('✓ Capitalize words (hello world):', StringUtils.capitalizeWords('hello world'));
    console.log('✓ Trim spaces (  hello   world  ):', `"${StringUtils.trimExtraSpaces('  hello   world  ')}"`);
    console.log('✓ Count words (hello beautiful world):', StringUtils.countWords('hello beautiful world'));
    console.log('✓ Reverse string (javascript):', StringUtils.reverse('javascript'));
    console.log('✓ Is palindrome (racecar):', StringUtils.isPalindrome('racecar'));

    // Array utils demo
    console.log('\nArray Utils Examples:');
    console.log('✓ Remove duplicates [1,2,2,3,3,4]:', ArrayUtils.removeDuplicates([1, 2, 2, 3, 3, 4]));
    console.log('✓ Find max [1,5,3,9,2]:', ArrayUtils.findMax([1, 5, 3, 9, 2]));
    console.log('✓ Find min [1,5,3,9,2]:', ArrayUtils.findMin([1, 5, 3, 9, 2]));
    console.log('✓ Average [1,2,3,4,5]:', ArrayUtils.average([1, 2, 3, 4, 5]));
    console.log('✓ Flatten [[1,2],[3,[4,5]]]:', ArrayUtils.flatten([[1, 2], [3, [4, 5]]]));
    console.log('✓ Chunk [1,2,3,4,5,6] by 2:', ArrayUtils.chunk([1, 2, 3, 4, 5, 6], 2));

    console.log('\n=== All examples completed successfully! ===');
  } catch (error) {
    console.error('Error:', error.message);
  }
}
