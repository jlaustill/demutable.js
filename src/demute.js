import demuteArray from './demute-array';

const demute = function (_obj) {
  const obj = demuteArray(_obj);
  const objectIsFunction = typeof obj === 'function';

  // Retrieve the property names defined on obj
  const propNames = Object.getOwnPropertyNames(obj);

  // Freeze properties before freezing self
  propNames.forEach(function(name) {
    const prop = obj[name];
    if ((objectIsFunction ? name !== 'caller' && name !== 'callee' && name !== 'arguments' : true)
    && prop !== null
    && (typeof prop === 'object' || prop === 'function')
      && !Object.isFrozen(prop)) {
      demute(prop);
    }
  });

  // Freeze self (no-op if already frozen)
  return Object.freeze(obj);
};

export default demute;
