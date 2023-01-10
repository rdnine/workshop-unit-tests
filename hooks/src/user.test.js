const { User } = require('./user');

const testName = 'Test';
const testEmail = 'test@test.com';
let user;

beforeAll(() => {
  user = new User(testName, testEmail);
  console.log('beforeAll()');
});
beforeEach(() => {
  user = new User(testName, testEmail);
  console.log('beforeEach()');
});
afterEach(() => {
  // user = new User(testEmail);
  console.log('afterEach()');
});
afterAll(() => {
  console.log('afterAll()');
});

test('should update the email', () => {
  const newTestEmail = 'test2@test.com';

  user.updateEmail(newTestEmail);

  expect(user.email).toBe(newTestEmail);
});

test('should have an email property', () => {
  expect(user).toHaveProperty('email');
});

test('should store the provided email value', () => {
  expect(user.email).toBe(testEmail);
});

test('should clear the email', () => {
  user.clearEmail();

  expect(user.email).toBe('');
});

test('should still have an email property after clearing the email', () => {
  user.clearEmail();

  expect(user).toHaveProperty('email');
});
