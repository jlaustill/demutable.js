const demute = require('../index.js').demute;

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

console.log(`d: ${JSON.stringify(d)}, d.favoriteNumbers.pop(): ${d.favoriteNumbers.pop()}`);
