import demute, { isDemuted } from '../index';
const a = demute({a: [1,3,2]});

describe('object', () => {
  it('should merge without mutating', () => {
    const b = a.merge({b: [{c: 5}]});
    expect(b.b[0].c).toBe(5);
    console.log(b);
    expect(isDemuted(b)).toBe(true);
  });

  it('should not mutate under any circumstances', () => {
    expect(JSON.stringify(a)).toBe(JSON.stringify({a: [1,3,2]}));
  });

  it('should remain demuted', () => {
    expect(isDemuted(a)).toBe(true);
  });
});
