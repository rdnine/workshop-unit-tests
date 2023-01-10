const jwt = require('jsonwebtoken');

function generateToken(userEmail, callback) {
  jwt.sign({ email: userEmail }, 'secret', callback);
}

function generateTokenPromise(userEmail) {
  const promise = new Promise((resolve, reject) => {
    jwt.sign({ email: userEmail }, 'secret', (error, token) => {
      if (error) {
        reject(error);
      } else {
        resolve(token);
      }
    });
  });

  return promise;
}

module.exports = {
  generateToken,
  generateTokenPromise
}