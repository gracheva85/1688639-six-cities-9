function createIdGenerator() {
  let lastGeneratedId = 0;

  return function (): number {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
}

const generateId = createIdGenerator();

export {generateId};
