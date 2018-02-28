import demute from '../index';
import isDemuted from './isDemuted';

describe('array', () => {
  it('should pop without mutating', () => {
    const a = demute([1,2,3]);
    const b = a.pop();

    expect(a.length).toBe(3);
    expect(b).toBe(3);
    expect(isDemuted(a)).toBe(true);
    expect(isDemuted(b)).toBe(true);
  });
});
