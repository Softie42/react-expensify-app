const add = (a, b) => a + b;

const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('Should add two numbers', () => {
  const result = add(3, 4);
  expect(result).toBe(7);
  });

test('Should generate greeting from Nigel', () => {
  const result = generateGreeting('Nigel');
  expect(result).toBe('Hello Nigel!');
  });

test('Should generate greeting from Anonymous', () => {
  const result = generateGreeting();
  expect(result).toBe('Hello Anonymous!');
  });

test('Should generate greeting from \'\'', () => {
  const result = generateGreeting('');
  expect(result).toBe('Hello !');
  });