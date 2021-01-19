import { getInitials, keepNumbers } from './stringUtils';

describe('stringUtils', () => {
  test('getInitials', () => {
    const name = 'Santiago';
    const res = getInitials(name);
    expect(res).toBe(name[0]);
  });
  test('keepNumbers', () => {
    const value = 24234;
    const res = keepNumbers(value);
    expect(typeof res).toBe('string');
  });
});
