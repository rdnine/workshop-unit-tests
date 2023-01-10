const path = require('path');
const { promises: fs } = require('fs');

function writeData(data, filename) {
  const storagePath = path.join(process.cwd(), 'data', filename);
  return fs.writeFile(storagePath, data);
}

module.exports = {
  writeData
}