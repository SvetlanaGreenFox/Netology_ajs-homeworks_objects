const orderByProps = (character, prop) => {
  const result = [];

  for (const property of prop) {
    for (const key in character) {
      if (key === property) {
        const favorites = {};
        favorites.key = property;
        favorites.value = character[key];
        result.push(favorites);
      }
    }
  }

  for (const property of prop) {
    for (const key in character) {
      if (key === property) {
        delete character[key];
      }
    }
  }

  const newObj = Object.keys(character);

  const sliceObj = newObj.sort((value1, value2) => {
    if (value1 === value2) {
      return 0;
    }
    return value1 > value2 ? 1 : -1;
  });

  sliceObj.forEach((item) => {
    const arr = {};
    arr.key = item;
    arr.value = character[item];
    result.push(arr);
  });

  return result;
};

export default orderByProps;
