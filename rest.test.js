describe("ES2015 conversion", function () {
    it("should filter the odd numbers passed in", function () {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        expect(filterOutOdds(...arr)).toEqual([2, 4, 6, 8]);
    });
});

describe("findMin", function () {
    it("should return the lowest number", function () {
        expect(findMin(1, 4, 12, -3)).toEqual(-3);
    });
});

describe("mergeObjects", function () {
    it("should return accept 2 objects and merge them to 1", function () {
        expect(mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 })).toEqual({ a: 1, b: 2, c: 3, d: 4 });
    });
});