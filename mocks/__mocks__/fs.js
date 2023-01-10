const promises = {
  writeFile: jest.fn((path, data) => {
    return new Promise((resolve, reject) => {
      resolve();
    });
  })
}

module.exports = {
  promises
}