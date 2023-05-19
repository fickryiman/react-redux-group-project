import fetchRocket from './__mock__/RocketSlice';

describe('Rockets must pass the test', () => {
  test('Fetch rockets must return data', () => {
    expect(fetchRocket()).toBeDefined();
  });
  test('Fetch rockets return value length must be', () => {
    expect(fetchRocket()).toHaveLength(5);
  });
  test('Fetch rockets return name should be', () => {
    expect(fetchRocket()[1].name).toBe('Falcon 9');
  });
});
