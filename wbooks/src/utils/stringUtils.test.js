import { getInitials, keepNumbers } from './stringUtils';

describe('getInitials', () => {
  test('gets initials of single word', () => {
    const name = 'Santiago';
    const res = getInitials(name);
    expect(res).toBe(name[0]);
  });
  test('gets initials of multiple words', () => {
    const words = 'Hello world';
    const res = getInitials(words);
    expect(res).toBe('H w');
  });
  test('undefined argument', () => {
    const res = getInitials();
    expect(res).toBe(undefined);
  });
});

describe('keepNumbers', () => {
  test('With number', () => {
    const value = 24234;
    const res = keepNumbers(value);
    expect(res).toBe('24234');
  });
  test('With string', () => {
    const value = 'santi';
    const res = keepNumbers(value);
    expect(res).toBe('');
  });
  test('undefined argument', () => {
    const res = keepNumbers();
    expect(res).toBe('');
  });
});
