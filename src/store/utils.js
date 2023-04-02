export const createNewId = (array) => {
  if (array.length === 0) {
    return 0;
  }

  if (array.length === 1 && array[0] !== 0) {
    return 0;
  }

  array.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i + 1] - array[i] > 1) {
      return array[i] + 1;
    }
  }

  return array[array.length - 1] + 1;
};

export const currentFormPosition = (id, array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].id === id) {
      return i;
    }
  }
  return -1;
};
