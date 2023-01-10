const { generateToken, generateTokenPromise } = require('./token');

test('should generate a token value', (done) => {
  const testUserEmail = 'test@test.com';

  generateToken(testUserEmail, (err, token) => {
    // expect(token).toBeDefined();

    try {
      expect(token).toBeDefined();
      // expect(token).toBe(2);
      done();
    } catch (err) {
      done(err);
    }
  });
});

test('Should validate that the promise resolves', () => {
  const testUserEmail = 'test@test.com';

  expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
});

test('Should validate the promise through async await', async () => {
  const testUserEmail = 'test@test.com';

  const token = await generateTokenPromise(testUserEmail);

  expect(token).toBeDefined();
});