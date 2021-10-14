const orderByProps = (obj, prop) => {
  const result = [];

  for (const property of prop) {
    for (const key in obj) {
      if (key === property) {
        const favorites = {};
        favorites['key'] = property;
        favorites['value'] = obj[key];
        result.push(favorites);
      }
    }
  };
  console.log(result);
  for (const property of prop) {
    for (const key in obj) {
      if (key === property) {
        delete obj[key];
      }
    }
  };

  const newObj = Object.keys(obj);

  const sliceObj = newObj.sort((value, value2) => {
    if (value === value2) {
      return 0;
    }
    return value > value2 ? 1 : -1;
  });

  sliceObj.forEach((item) => {
    const arr = {};
    arr['key'] = item;
    arr['value'] = obj[item];
    result.push(arr);
  });

  return result;
};

export default orderByProps;