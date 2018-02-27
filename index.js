import demuteArray from './src/demute-array';

const demute = function (_obj) {
  const obj = demuteArray(_obj);

  // Retrieve the property names defined on obj
    const propNames = Object.getOwnPropertyNames(obj);

    // Freeze properties before freezing self
  propNames.forEach(function(name) {
      let prop = obj[name];

      // Freeze prop if it is an object
    if (typeof prop === 'object' && prop !== null)
      demute(prop);
  });

  // Freeze self (no-op if already frozen)
  return Object.freeze(obj);
};

export default demute;
