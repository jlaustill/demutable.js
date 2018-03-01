import demute from '../index.js';

const a = demute([1,2,3]);
const b = a.push(4);
const c = a.pop();

console.log(`a: [${a}], b: [${b}], c: [${c}], a.includes(1): ${a.includes(1)}`);

const d = demute({
  name: 'test',
  favoriteNumbers: [
    1,
    3,
    5,
  ],
});

console.log(`d starts as: ${JSON.stringify(d)}`);
console.log(`d.favoriteNumbers.pop(): ${d.favoriteNumbers.pop()}`);
console.log(`d.favoriteNumbers.shift(): ${d.favoriteNumbers.shift()}`);
console.log(`d.favoriteNumbers.push(7): ${d.favoriteNumbers.push(7, 9)}`);
console.log(`d.favoriteNumbers.unshift(a, b): ${d.favoriteNumbers.unshift(7, 9, a, b)}`);
console.log(`d ends as: ${JSON.stringify(d)}`);
