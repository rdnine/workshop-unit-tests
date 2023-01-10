import jwt from 'jsonwebtoken';

export function generateToken(userEmail, callback) {
  jwt.sign({ email: userEmail }, 'secret', callback);
}

export function generateTokenPromise(userEmail) {
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