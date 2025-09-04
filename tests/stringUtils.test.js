const StringUtils = require('../src/stringUtils');

describe('StringUtils', () => {
  describe('isValidEmail', () => {
    test('should return true for valid emails', () => {
      expect(StringUtils.isValidEmail('test@example.com')).toBe(true);
      expect(StringUtils.isValidEmail('user.name+tag@domain.co.uk')).toBe(true);
    });

    test('should return false for invalid emails', () => {
      expect(StringUtils.isValidEmail('invalid-email')).toBe(false);
      expect(StringUtils.isValidEmail('@example.com')).toBe(false);
      expect(StringUtils.isValidEmail('test@')).toBe(false);
    });

    test('should handle null and undefined inputs', () => {
      expect(StringUtils.isValidEmail(null)).toBe(false);
      expect(StringUtils.isValidEmail(undefined)).toBe(false);
      expect(StringUtils.isValidEmail('')).toBe(false);
    });

    test('should handle whitespace in emails', () => {
      expect(StringUtils.isValidEmail(' test@example.com ')).toBe(true);
    });
  });

  describe('capitalizeWords', () => {
    test('should capitalize first letter of each word', () => {
      expect(StringUtils.capitalizeWords('hello world')).toBe('Hello World');
      expect(StringUtils.capitalizeWords('javaScript is awesome')).toBe('Javascript Is Awesome');
    });

    test('should handle multiple spaces', () => {
      expect(StringUtils.capitalizeWords('hello  world')).toBe('Hello  World');
    });

    test('should handle empty and null inputs', () => {
      expect(StringUtils.capitalizeWords('')).toBe('');
      expect(StringUtils.capitalizeWords(null)).toBe('');
      expect(StringUtils.capitalizeWords(undefined)).toBe('');
    });

    test('should handle single words', () => {
      expect(StringUtils.capitalizeWords('hello')).toBe('Hello');
    });
  });

  describe('trimExtraSpaces', () => {
    test('should remove extra spaces between words', () => {
      expect(StringUtils.trimExtraSpaces('hello    world')).toBe('hello world');
      expect(StringUtils.trimExtraSpaces('  test  string  ')).toBe('test string');
    });

    test('should handle tabs and newlines', () => {
      expect(StringUtils.trimExtraSpaces('hello\t\nworld')).toBe('hello world');
    });

    test('should handle empty strings', () => {
      expect(StringUtils.trimExtraSpaces('')).toBe('');
      expect(StringUtils.trimExtraSpaces('   ')).toBe('');
    });
  });

  describe('countWords', () => {
    test('should count words correctly', () => {
      expect(StringUtils.countWords('hello world')).toBe(2);
      expect(StringUtils.countWords('one two three four')).toBe(4);
    });

    test('should handle extra spaces', () => {
      expect(StringUtils.countWords('hello   world')).toBe(2);
      expect(StringUtils.countWords('  one  two  ')).toBe(2);
    });

    test('should return 0 for empty strings', () => {
      expect(StringUtils.countWords('')).toBe(0);
      expect(StringUtils.countWords('   ')).toBe(0);
      expect(StringUtils.countWords(null)).toBe(0);
    });

    test('should handle single words', () => {
      expect(StringUtils.countWords('hello')).toBe(1);
    });
  });

  describe('reverse', () => {
    test('should reverse string correctly', () => {
      expect(StringUtils.reverse('hello')).toBe('olleh');
      expect(StringUtils.reverse('JavaScript')).toBe('tpircSavaJ');
    });

    test('should handle empty strings', () => {
      expect(StringUtils.reverse('')).toBe('');
      expect(StringUtils.reverse(null)).toBe('');
    });

    test('should handle Unicode characters', () => {
      expect(StringUtils.reverse('🎉🎊')).toBe('🎊🎉');
    });
  });

  describe('isPalindrome', () => {
    test('should detect palindromes correctly', () => {
      expect(StringUtils.isPalindrome('racecar')).toBe(true);
      expect(StringUtils.isPalindrome('A man a plan a canal Panama')).toBe(true);
    });

    test('should handle case insensitive palindromes', () => {
      expect(StringUtils.isPalindrome('Racecar')).toBe(true);
      expect(StringUtils.isPalindrome('Was it a rat I saw')).toBe(true);
    });

    test('should return false for non-palindromes', () => {
      expect(StringUtils.isPalindrome('hello')).toBe(false);
      expect(StringUtils.isPalindrome('JavaScript')).toBe(false);
    });

    test('should handle empty strings and edge cases', () => {
      expect(StringUtils.isPalindrome('')).toBe(false);
      expect(StringUtils.isPalindrome(null)).toBe(false);
      expect(StringUtils.isPalindrome('a')).toBe(true);
    });
  });
});