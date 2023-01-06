import calculateHealth from '../health';

test('should calculate health 90', () => {
  const input = { name: 'Маг', health: 90 };
  const expected = 'healthy';
  const received = calculateHealth(input);
  expect(received).toBe(expected);
});

test('should calculate health 40', () => {
  const input = { name: 'Маг', health: 40 };
  const expected = 'wounded';
  const received = calculateHealth(input);
  expect(received).toBe(expected);
});

test('should calculate health 10', () => {
  const input = { name: 'Маг', health: 10 };
  const expected = 'critical';
  const received = calculateHealth(input);
  expect(received).toBe(expected);
});
