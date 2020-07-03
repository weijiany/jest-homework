describe("expect.equal", () => {
  test("TODO 1", () => {
    // TODO 1: to replace "matcher"
    expect(1 + 1).toBe(2);
  });
  test("TODO 2", () => {
    // TODO 2: to replace "matcher"
    expect(0.2 + 0.1).toBeCloseTo(0.3);
  });
  test("TODO 3", () => {
    // TODO 3: to replace "matcher"
    expect(4).toBeGreaterThan(1);
  });
  test("TODO 4", () => {
    // TODO 4: to replace "matcher"
    const fn = () => {};
    expect(fn).toEqual(expect.any(Function));
  });
  test("TODO 5", () => {
    // TODO 5: to replace "matcher"
    expect(undefined).toBeUndefined();
  });
  test("TODO 6", () => {
    // TODO 6: to replace "matcher"
    expect(null).toBeNull();
  });
  test("TODO 7", () => {
    // TODO 7: to replace "matcher"
    expect(false).toBeFalsy();
    expect(0).toBe(0);
    expect("").toBe("");
  });
  test("TODO 8", () => {
    // TODO 8: to replace "matcher"
    expect({ a: 1 }).toEqual({ a: 1 });
  });
  test("TODO 9", () => {
    // TODO 9: to replace "expected" value
    class LaCroix {
      constructor(flavor) {
        this.flavor = flavor;
      }
    }
    expect(new LaCroix("lemon")).toEqual(expect.any(LaCroix));
  });
  test("TODO 10", () => {
    // TODO 10: to replace "expected" value
    expect([1, 2, 3]).toHaveLength(3);
  });
});
