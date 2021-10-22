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
  const playerData = character;
  for (const property of prop) {
    for (const key in playerData) {
      if (key === property) {
        delete playerData[key];
      }
    }
  }

  const newObj = Object.keys(playerData);

  const sliceObj = newObj.sort((value1, value2) => (value1 > value2 ? 1 : -1));

  sliceObj.forEach((item) => {
    const arr = {};
    arr.key = item;
    arr.value = playerData[item];
    result.push(arr);
  });

  return result;
};

export default orderByProps;
