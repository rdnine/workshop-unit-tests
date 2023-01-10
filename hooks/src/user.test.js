const { User } = require('./user');

test('should update the email', () => {
  const testName = 'Test';
  const testEmail = 'test@test.com';
  const newTestEmail = 'test2@test.com';

  const user = new User(testName, testEmail);
  user.updateEmail(newTestEmail);

  expect(user.email).toBe(newTestEmail);
});

test('should have an email property', () => {
  const testName = 'Test';
  const testEmail = 'test@test.com';

  const user = new User(testName, testEmail);

  expect(user).toHaveProperty('email');
});

test('should store the provided email value', () => {
  const testName = 'Test';
  const testEmail = 'test@test.com';

  const user = new User(testName, testEmail);

  expect(user.email).toBe(testEmail);
});

test('should clear the email', () => {
  const testName = 'Test';
  const testEmail = 'test@test.com';

  const user = new User(testName, testEmail);
  user.clearEmail();

  expect(user.email).toBe('');
});

test('should still have an email property after clearing the email', () => {
  const testName = 'Test';
  const testEmail = 'test@test.com';

  const user = new User(testName, testEmail);
  user.clearEmail();

  expect(user).toHaveProperty('email');
});
