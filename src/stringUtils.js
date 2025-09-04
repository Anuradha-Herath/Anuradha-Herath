// String utility functions with bug fixes
class StringUtils {
  /**
   * Check if a string is a valid email
   * Bug Fix #9: Improved email validation regex
   * Bug Fix #10: Added null/undefined checking
   */
  static isValidEmail (email) {
    // Fixed: Added null/undefined check
    if (!email || typeof email !== 'string') {
      return false;
    }

    // Fixed: Improved email regex pattern
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email.trim());
  }

  /**
   * Capitalize first letter of each word
   * Bug Fix #11: Handle empty strings and multiple spaces
   * Bug Fix #12: Preserve original spacing
   */
  static capitalizeWords (str) {
    if (!str || typeof str !== 'string') {
      return '';
    }

    // Fixed: Handle multiple spaces and preserve them
    return str.replace(/\b\w+/g, (word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
  }

  /**
   * Remove extra whitespace from string
   * Bug Fix #13: Handle all types of whitespace characters
   */
  static trimExtraSpaces (str) {
    if (!str || typeof str !== 'string') {
      return '';
    }

    // Fixed: Handle all whitespace characters, not just spaces
    return str.replace(/\s+/g, ' ').trim();
  }

  /**
   * Count words in a string
   * Bug Fix #14: Accurate word counting with proper delimiter handling
   */
  static countWords (str) {
    if (!str || typeof str !== 'string') {
      return 0;
    }

    // Fixed: More accurate word counting
    const trimmed = str.trim();
    if (trimmed === '') {
      return 0;
    }

    return trimmed.split(/\s+/).length;
  }

  /**
   * Reverse a string
   * Bug Fix #15: Handle Unicode characters properly
   */
  static reverse (str) {
    if (!str || typeof str !== 'string') {
      return '';
    }

    // Fixed: Handle Unicode characters properly using Array.from
    return Array.from(str).reverse().join('');
  }

  /**
   * Check if string is palindrome
   * Bug Fix #16: Case insensitive comparison and ignore spaces/punctuation
   */
  static isPalindrome (str) {
    if (!str || typeof str !== 'string') {
      return false;
    }

    // Fixed: Remove non-alphanumeric characters and convert to lowercase
    const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversed = Array.from(cleaned).reverse().join('');

    return cleaned === reversed;
  }
}

module.exports = StringUtils;
