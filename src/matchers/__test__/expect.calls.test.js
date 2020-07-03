function forEach(items, callback) {
  items.forEach((item) => callback(item));
}

test("TODO 11", () => {
  const mockCallback = jest.fn((x) => 42 + x);
  forEach([1, 2], mockCallback);

  expect(mockCallback).toBeCalledTimes(2);
  expect(mockCallback).toHaveBeenCalledWith(1);
  expect(mockCallback).toHaveBeenCalledWith(2);
});

test("TODO 12", () => {
  const mockFn = jest.fn();
  mockFn
    .mockReturnValueOnce(42)
    .mockReturnValueOnce("string")
    .mockReturnValue(true);

  expect(mockFn()).toBe(42);
  expect(mockFn()).toBe("string");
  expect(mockFn()).toBe(true);
  expect(mockFn()).toBe(true);
});
