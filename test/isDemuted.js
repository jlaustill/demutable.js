const isDemuted = (obj) => {
  if (Object.isFrozen(obj)) {
    // Retrieve the property names defined on obj
    const propNames = Object.getOwnPropertyNames(obj);

    return propNames.every(p => {
      const prop = obj[p];

      if (typeof prop === 'object' && prop !== null) {
        return isDemuted(prop);
      }

      return true;
    });
  }

  return false;
};

export default isDemuted;
