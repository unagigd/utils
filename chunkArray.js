function chunkArray(inputArray, chunkSize) {
  const arrayCopy = [...inputArray];
  const chunks = [];

  while (arrayCopy.length) {
    chunks.push(arrayCopy.splice(0, chunkSize));
  }

  return chunks;
}
