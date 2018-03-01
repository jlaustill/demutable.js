import demute, { isDemuted } from '../index';
const a = demute([1,3,2]);

describe('array', () => {
  it('should splice without mutating', () => {
    const b = a.splice(1,1,4,5);
    expect(b.length).toBe(4);
    expect(isDemuted(b)).toBe(true);
  });

  it('should reverse by returning, not mutating', () => {
    const b = a.reverse();
    expect(b.pop()).toBe(1);
    expect(b.shift()).toBe(2);
    expect(isDemuted(b)).toBe(true);
  });

  it('should sort without mutating', () => {
    const b = a.sort();
    expect(b.pop()).toBe(3);
    expect(b.shift()).toBe(1);
    expect(isDemuted(b)).toBe(true);
  });

  it('should pop without mutating', () => {
    const b = a.pop();
    expect(b).toBe(2);
    expect(isDemuted(b)).toBe(true);
  });

  it('should push without mutating', () => {
    const b = a.push(4);
    expect(b.length).toBe(4);
    expect(isDemuted(b)).toBe(true);
  });

  it('should shift without mutating', () => {
    const b = a.shift();
    expect(b).toBe(1);
    expect(isDemuted(b)).toBe(true);
  });

  it('should unshift without mutating', () => {
    const b = a.unshift(4, 5);
    expect(b.length).toBe(5);
    expect(b).toContain(5);
    expect(isDemuted(b)).toBe(true);
  });

  it('should not mutate under any circumstances', () => {
    expect(a.length).toBe(3);
  });

  it('should remain demuted', () => {
    expect(isDemuted(a)).toBe(true);
  });
});
